import React from 'react';
import './style.css';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export const MyAspectRatio = () => (
  <div className="Container">
    <AspectRatio.Root ratio={16 / 9}>
      <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape"
      />
    </AspectRatio.Root>
  </div>
);
