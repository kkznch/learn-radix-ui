import React from 'react';
import './style.css';
import * as Avatar from '@radix-ui/react-avatar';

export const MyAvatar = () => (
  <div style={{ display: 'flex', gap: 20 }}>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://pbs.twimg.com/profile_images/1451538868478496779/xtKPFJ2m_400x400.jpg"
        alt="けけずん"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        けけ
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="AvatarRoot">
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        KK
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);
