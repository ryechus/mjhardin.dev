// @ts-check
import { defineConfig } from 'astro/config';

import mixpanel from "astrojs-mixpanel";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mixpanel({
      token: "1ef9c686254ddbfa5de83e3d5f07359a",
      config: {
        track_pageview: false,
        persistence: "localStorage",
        batch_requests: true,
        debug: true,
      },
      autoTrack: false, // Enable automatic page view tracking
    }),
  ],
  
});