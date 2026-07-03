# Our World 🌍

An interactive web experience showcasing cherished memories and adventures from around the globe. Built with Next.js, Three.js, and Tailwind CSS.

## Features

✨ **Interactive 3D Globe** - Explore locations with an interactive Three.js globe that shows all your precious memories

📍 **Memory Markers** - Visual markers on the globe highlighting each location

💌 **Memory Cards** - Beautiful modal cards with detailed stories and descriptions for each memory

📅 **Timeline View** - Chronological journey through your adventures with interactive timeline

🎨 **Modern Design** - Sleek, dark-themed UI with smooth animations and gradients

📱 **Responsive** - Fully responsive design that works on all devices

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhialekhsinghrajput70045-wq/our-world.git
cd our-world
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
our-world/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Globe.tsx             # Interactive 3D globe
│   ├── Marker.tsx            # Memory location markers
│   ├── MemoryCard.tsx        # Memory detail modal
│   ├── Timeline.tsx          # Timeline view
│   └── Ending.tsx            # Closing section
├── data/
│   └── memories.ts           # Memory data
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
```

## Customization

### Adding Memories

Edit `data/memories.ts` and add new memory objects:

```typescript
{
  id: 7,
  title: "Your Title",
  description: "Brief description",
  location: "City, Country",
  coordinates: [latitude, longitude],
  date: "Month Year",
  image: "emoji",
  color: "from-color-500 to-color-600",
  story: "Your detailed story...",
}
```

### Changing Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#1a1a2e',
  secondary: '#16213e',
  accent: '#0f3460',
  highlight: '#e94560',
  light: '#eaeaea',
}
```

### Styling

Global styles are in `app/globals.css`. Component styles use Tailwind CSS classes.

## Building for Production

```bash
npm run build
npm start
```

## Performance Tips

- The globe uses Three.js for 3D rendering - ensure WebGL support in target browsers
- Timeline animations use Framer Motion's `whileInView` for performance
- Images are optimized through Next.js Image component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Image upload for memories
- [ ] Audio/music integration
- [ ] Interactive globe touch interactions
- [ ] Dark/Light theme toggle
- [ ] Social sharing features
- [ ] Multi-language support

## License

MIT License - feel free to use this for personal or commercial projects.

## Author

Created with ❤️ by Abhilekh Singh

---

**Enjoy your journey through Our World! 🌍✨**
