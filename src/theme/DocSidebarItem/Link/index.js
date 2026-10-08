import React from 'react';
import OriginalLink from '@theme-original/DocSidebarItem/Link';

export default function SidebarLink({item, ...props}) {
  const endpointLabel = item.customProps?.endpointLabel;
  return (
    <OriginalLink
      {...props}
      item={endpointLabel ? {...item, label: endpointLabel} : item}
      {...(endpointLabel ? {title: item.label} : {})}
    />
  );
}
