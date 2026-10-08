const acronyms = new Set(['api', 'sms', 'gbg', 'ppe', 'mm', 'ni', 'rtw']);

function resourceLabel(segment) {
  return segment.split(/[-_]/).map((word) => (
    acronyms.has(word) ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)
  )).join(' ');
}

function endpointTree(docs, domain) {
  const root = {items: [], children: new Map()};
  const prefix = `/api/${domain}`;

  for (const doc of docs) {
    const {method, path} = doc.frontMatter;
    const relativePath = path.startsWith(`${prefix}/`) ? path.slice(prefix.length) : path;
    // Parameters stay in endpoint labels, but do not create extra tree levels.
    const resources = relativePath.split('/').filter((part) => part && !part.startsWith('{'));
    let node = root;
    for (const resource of resources) {
      if (!node.children.has(resource)) {
        node.children.set(resource, {items: [], children: new Map()});
      }
      node = node.children.get(resource);
    }
    node.items.push({
      type: 'doc',
      id: doc.id,
      label: `${method} ${relativePath}`,
      className: 'sidebar-api-endpoint',
      customProps: {endpointLabel: `${method} ${relativePath}`},
    });
  }

  function toItems(node, depth = 0) {
    return [
      ...node.items.sort((a, b) => a.label.localeCompare(b.label)),
      ...[...node.children.entries()].sort(([a], [b]) => a.localeCompare(b)).flatMap(([resource, child]) => {
        const items = toItems(child, depth + 1);
        // A single terminal action is already clear from its endpoint label.
        if (depth > 0 && child.children.size === 0 && items.length === 1) {
          return items;
        }
        return [{
          type: 'category',
          label: resourceLabel(resource),
          collapsible: true,
          collapsed: true,
          items,
        }];
      }),
    ];
  }

  return toItems(root);
}

export default async function sidebarItemsGenerator(args) {
  const items = await args.defaultSidebarItemsGenerator(args);
  if (args.item.dirName !== 'api') {
    return items;
  }

  const docsById = new Map(args.docs.map((doc) => [doc.id, doc]));
  function groupEndpoints(item) {
    if (item.type !== 'category') {
      return item;
    }
    const endpoints = item.items.filter((child) => {
      const frontMatter = docsById.get(child.id)?.frontMatter;
      return child.type === 'doc' && frontMatter?.method && frontMatter?.path;
    });
    if (endpoints.length === 0) {
      return {...item, items: item.items.map(groupEndpoints)};
    }
    const docs = endpoints.map((endpoint) => docsById.get(endpoint.id));
    const domain = docs[0].frontMatter.domain;
    const endpointIds = new Set(docs.map((doc) => doc.id));
    return {
      ...item,
      label: resourceLabel(domain),
      items: [
        ...item.items.filter((child) => !endpointIds.has(child.id)).map(groupEndpoints),
        ...endpointTree(docs, domain),
      ],
    };
  }

  return items.map(groupEndpoints);
}
