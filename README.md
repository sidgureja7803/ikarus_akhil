# 🪑 Dynamic UI Editor - Furniture Customizer

A powerful, real-time React-based furniture customization UI with live preview and comprehensive design controls. Customize furniture appearance without touching code - built with React, Vite, Tailwind CSS, and Zustand.

![Dynamic UI Editor](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-cyan) ![Zustand](https://img.shields.io/badge/Zustand-latest-orange)

## 🌟 Features

### 🪑 Furniture Customization

The app features a professional furniture product configurator with:

- **Interactive 3D-like Product View**
  - Main furniture display with real product images
  - Thumbnail gallery with 6 preview angles
  - Zoom, pan, and maximize controls
  - "View in your room" AR preview option

- **Material & Finish Customization**
  - **Arms Selection**: Choose arm styles
  - **Arms Finish**: Select from 6 material types (Leather, Silicon, Aluminium, Steel, Polyester, Plast)
  - **Color Swatches**: 10 colors per material type
  - **Legs Finish**: Customize leg materials and colors
  - Expandable/collapsible customization sections

- **Dual Layout System**
  - **Layout A (Desktop)**: Full-featured desktop experience with side-by-side image viewer and customization panel
  - **Layout B (Mobile/iPhone)**: Optimized mobile interface with compact controls and streamlined UX

### 🎨 Complete Design Editor

Modify the UI appearance in real-time through the editor panel:

- **Typography**
  - Font Family (Roboto, Inter, Poppins)
  - Font Weight (400, 500, 600, 700)
  - Font Size (10px - 60px)

- **Button Customizations**
  - Border Radius (slider)
  - Shadow Options (none, small, medium, large)
  - Alignment (left, center, right)
  - Background Color (HEX/RGB picker)
  - Text Color (HEX/RGB picker)

- **Visual Elements**
  - Image Spacing (slider)
  - Image Border Radius
  - Card Corner Radius
  - Container Padding
  - Section Background Color

- **Stroke / Border**
  - Stroke Color
  - Stroke Weight

### Core Functionality

✅ **Live Preview** - All changes reflect instantly in real-time  
✅ **Layout Switching** - Toggle between Desktop and Mobile layouts  
✅ **Export Configuration** - Download and copy UI state as JSON  
✅ **Responsive Design** - Fully responsive editor and preview  
✅ **Modern UI/UX** - Clean, intuitive interface with smooth interactions  
✅ **Product Configurator** - Professional e-commerce customization experience

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ikarus

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── UIComponent.jsx          # Main preview component with 2 layouts
│   ├── EditorPanel.jsx          # Editor sidebar with all controls
│   └── Controls/
│       ├── ColorPicker.jsx      # Color picker control
│       ├── FontSelector.jsx     # Font selection dropdown
│       ├── SliderControl.jsx    # Reusable slider component
│       └── LayoutSwitch.jsx     # Layout A/B toggle
├── hooks/
│   └── useEditorState.js        # Zustand store for state management
├── App.jsx                      # Main app layout
├── main.jsx                     # App entry point
└── index.css                    # Global styles + font imports
```

## 🧠 How It Works

### State Management (Zustand)

The editor uses Zustand for centralized state management. All customization values are stored in a single store (`useEditorState`) with actions to update each property:

```javascript
// Example: Accessing and updating state
const { 
  fontSize, 
  setFontSize,
  buttonBackgroundColor,
  setButtonBackgroundColor 
} = useEditorState();
```

### Component API

The `UIComponent` reads all styling properties from the Zustand store and applies them dynamically:

```javascript
const typographyStyle = {
  fontFamily: fontFamily,
  fontWeight: fontWeight,
  fontSize: `${fontSize}px`,
};
```

### Configurable Props

All UI properties are configurable through the editor:

| Property | Type | Range/Options | Default |
|----------|------|---------------|---------|
| fontFamily | string | Roboto, Inter, Poppins | Inter |
| fontWeight | number | 400, 500, 600, 700 | 500 |
| fontSize | number | 10-60px | 16px |
| buttonBorderRadius | number | 0-50px | 8px |
| buttonShadow | string | none, small, medium, large | medium |
| buttonAlignment | string | left, center, right | center |
| cardCornerRadius | number | 0-50px | 16px |
| containerPadding | number | 0-80px | 24px |
| imageSpacing | number | 0-48px | 16px |
| imageBorderRadius | number | 0-50px | 8px |
| strokeWeight | number | 0-10px | 1px |

## 🎯 Design Decisions

### Architecture

- **Modular Components**: Each control is a separate, reusable component
- **Single Source of Truth**: Zustand provides one centralized state
- **Inline Styles + Tailwind**: Dynamic styles use inline styles; static structure uses Tailwind
- **Type-Safe Controls**: Each control validates input ranges

### UX Enhancements

1. **Visual Feedback**: Active states, hover effects, smooth transitions
2. **Real-time Updates**: No "Apply" button needed - changes are instant
3. **Smart Defaults**: Sensible default values for quick start
4. **Export Feature**: One-click download + clipboard copy
5. **Custom Scrollbars**: Styled scrollbars for better aesthetics

### Layout Variants

**Layout A (Desktop)**:
- Side-by-side image viewer and customization panel
- Vertical thumbnail gallery on the left
- Large main product image with viewer controls
- Comprehensive customization options with expandable sections
- Material tabs and color swatches
- Professional desktop e-commerce experience

**Layout B (Mobile/iPhone)**:
- Optimized for mobile screens (max-width: 28rem)
- Compact header with view controls
- Full-width product image
- Streamlined customization interface
- Horizontal scrolling material swatches
- Touch-optimized UI elements
- Collapsible product info section

## 🎨 Customization

### Adding New Controls

1. Create a new control component in `src/components/Controls/`
2. Add state and actions to `useEditorState.js`
3. Import and use in `EditorPanel.jsx`
4. Apply styles in `UIComponent.jsx`

Example:
```javascript
// In useEditorState.js
textAlign: 'left',
setTextAlign: (align) => set({ textAlign: align }),

// In UIComponent.jsx
style={{ textAlign: textAlign }}
```

### Adding New Layouts

Add a new layout condition in `UIComponent.jsx`:

```javascript
if (activeLayout === 'C') {
  return (
    // Your new layout JSX
  );
}
```

## 🛠 Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 4.1.14** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **react-color** - Color picker components
- **Lucide React** - Modern icon library

## 📦 Deployment

This project can be easily deployed to:

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for learning or production!

## 🎓 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

Built with ❤️ using React + Vite + Tailwind CSS
