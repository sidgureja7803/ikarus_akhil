import { ChevronDown, ChevronUp, Maximize2, Move, ZoomIn, ZoomOut, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import useEditorState from '../hooks/useEditorState';
import FurnitureImage from '../assets/Furniture.png';

const UIComponent = () => {
  const {
    activeLayout,
    fontFamily,
    fontWeight,
    fontSize,
    buttonBorderRadius,
    buttonShadow,
    buttonAlignment,
    buttonBackgroundColor,
    buttonTextColor,
    imageSpacing,
    imageBorderRadius,
    cardCornerRadius,
    containerPadding,
    sectionBackgroundColor,
    strokeColor,
    strokeWeight,
  } = useEditorState();

  // State for expandable sections
  const [expandedArms, setExpandedArms] = useState(false);
  const [expandedArmsFinish, setExpandedArmsFinish] = useState(false);
  const [expandedLegsFinish, setExpandedLegsFinish] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState('Leather');
  const [selectedArm] = useState('Fixed Arms');
  const [selectedArmsFinish] = useState('Leather Brown');
  const [selectedLegsFinish] = useState('Steel');
  const [selectedColor, setSelectedColor] = useState('#4A3428');

  // Material colors
  const materialColors = {
    Leather: [
      '#4A3428', '#556B2F', '#2F4F4F', '#708090', '#483D8B',
      '#8B4789', '#4682B4', '#A0522D', '#8B4513', '#2E8B57'
    ],
    Silicon: [
      '#696969', '#556B2F', '#2F4F4F', '#708090', '#483D8B',
      '#8B4789', '#4682B4', '#A0522D', '#8B4513', '#2E8B57'
    ],
    Aluminium: [
      '#C0C0C0', '#708090', '#778899', '#696969', '#A9A9A9'
    ],
    Steel: [
      '#B0B0B0', '#808080', '#696969', '#778899', '#708090'
    ],
    Polyester: [
      '#4682B4', '#5F9EA0', '#6495ED', '#4169E1', '#1E90FF'
    ],
    Plast: [
      '#FF6347', '#FF4500', '#DC143C', '#B22222', '#8B0000'
    ]
  };

  // Shadow mapping
  const shadowMap = {
    none: 'shadow-none',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };

  // Button alignment mapping
  const buttonAlignMap = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  // Typography styles
  const typographyStyle = {
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontSize: `${fontSize}px`,
  };

  // Button style
  const buttonStyle = {
    borderRadius: `${buttonBorderRadius}px`,
    backgroundColor: buttonBackgroundColor,
    color: buttonTextColor,
    ...typographyStyle,
  };

  // Desktop Layout - Furniture Customizer
  if (activeLayout === 'A') {
    return (
      <div 
        className="min-h-screen p-4 md:p-8"
        style={{ backgroundColor: sectionBackgroundColor }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-6">
            {/* Left Side - Image Viewer */}
            <div 
              className="bg-white border order-2 lg:order-1"
              style={{
                borderRadius: `${cardCornerRadius}px`,
                padding: `${containerPadding}px`,
                borderColor: strokeColor,
                borderWidth: `${strokeWeight}px`,
              }}
            >
              <div className="flex gap-4 h-full">
                {/* Thumbnail Gallery */}
                <div className="flex flex-col gap-2 overflow-y-auto" style={{ gap: `${imageSpacing}px` }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                      style={{ borderRadius: `${imageBorderRadius}px` }}
                    >
                      <img src={FurnitureImage} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" style={{ borderRadius: `${imageBorderRadius}px` }} />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 bg-gray-50 rounded-lg relative flex items-center justify-center p-8">
                  <img src={FurnitureImage} alt="Cozy Longe chair" className="max-w-full max-h-[500px] object-contain" />
                  
                  {/* Viewer Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                      <Maximize2 size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                      <Move size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                      <ZoomIn size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                      <ZoomOut size={18} />
                    </button>
                  </div>

                  {/* View in your room button */}
                  <button className="absolute bottom-4 left-4 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                    View in your room
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Customization Panel */}
            <div 
              className="bg-white border order-1 lg:order-2"
              style={{
                borderRadius: `${cardCornerRadius}px`,
                padding: `${containerPadding}px`,
                borderColor: strokeColor,
                borderWidth: `${strokeWeight}px`,
              }}
            >
              {/* Product Title */}
              <h1 
                className="mb-2"
                style={{
                  ...typographyStyle,
                  fontSize: `${fontSize * 1.5}px`,
                }}
              >
                Cozy Longe chair
              </h1>
              <div className="h-2 w-40 bg-gray-200 rounded mb-6"></div>

              {/* Customize Section */}
              <div className="flex items-center justify-between mb-4">
                <h2 
                  style={{
                    ...typographyStyle,
                    fontSize: `${fontSize * 1.1}px`,
                  }}
                >
                  Customize your Chair
                </h2>
                <SlidersHorizontal size={20} className="text-gray-600" />
              </div>

              {/* Customization Options */}
              <div className="space-y-3">
                {/* 1. Arms */}
                <div 
                  className="border bg-gray-50 rounded-lg p-4 cursor-pointer"
                  onClick={() => setExpandedArms(!expandedArms)}
                  style={{ borderColor: strokeColor, borderWidth: `${strokeWeight}px` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="8" width="18" height="10" rx="2"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium" style={typographyStyle}>1. Arms</div>
                      <div className="text-sm text-gray-500">{selectedArm}</div>
                    </div>
                    <ChevronDown size={20} className={`transition-transform ${expandedArms ? 'rotate-180' : ''}`} />
                  </div>
                </div>

                {/* 2. Arms Finish */}
                <div 
                  className="border rounded-lg p-4 cursor-pointer bg-rose-50"
                  onClick={() => setExpandedArmsFinish(!expandedArmsFinish)}
                  style={{ borderColor: strokeColor, borderWidth: `${strokeWeight}px` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded" style={{ backgroundColor: selectedColor }}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium" style={typographyStyle}>2. Arms Finish</div>
                      <div className="text-sm text-gray-500">{selectedArmsFinish}</div>
                    </div>
                    <ChevronUp size={20} className={`transition-transform ${!expandedArmsFinish ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Material Tabs */}
                  {expandedArmsFinish && (
                    <div className="mt-4">
                      <div className="flex gap-2 mb-3 overflow-x-auto pb-2 text-sm">
                        {['Leather', 'Silicon', 'Aluminium', 'Steel', 'Polyester', 'Plast'].map((material) => (
                          <button
                            key={material}
                            onClick={(e) => { e.stopPropagation(); setSelectedMaterial(material); }}
                            className={`px-3 py-1 whitespace-nowrap transition-colors ${
                              selectedMaterial === material
                                ? 'border-b-2 border-black font-medium'
                                : 'text-gray-600'
                            }`}
                            style={typographyStyle}
                          >
                            {material}
                          </button>
                        ))}
                      </div>

                      {/* Color Swatches */}
                      <div className="grid grid-cols-5 gap-2">
                        {materialColors[selectedMaterial].map((color, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setSelectedColor(color); }}
                            className={`w-12 h-12 rounded-full transition-all ${
                              selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Legs Finish */}
                <div 
                  className="border bg-gray-50 rounded-lg p-4 cursor-pointer"
                  onClick={() => setExpandedLegsFinish(!expandedLegsFinish)}
                  style={{ borderColor: strokeColor, borderWidth: `${strokeWeight}px` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium" style={typographyStyle}>3. Legs Finish</div>
                      <div className="text-sm text-gray-500">{selectedLegsFinish}</div>
                    </div>
                    <ChevronDown size={20} className={`transition-transform ${expandedLegsFinish ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>

              {/* Product Price & Add to Cart */}
              <div className="mt-8 pt-6 border-t" style={{ borderColor: strokeColor }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-600" style={typographyStyle}>Product Price</div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold" style={typographyStyle}>$ 200</span>
                      <span className="text-gray-400 line-through" style={typographyStyle}>$ 245</span>
                    </div>
                  </div>
                </div>
                <div className={`flex ${buttonAlignMap[buttonAlignment]}`}>
                  <button
                    className={`w-full px-6 py-3 ${shadowMap[buttonShadow]} transition-all hover:scale-[1.02]`}
                    style={buttonStyle}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout B - Mobile/iPhone Layout
  return (
    <div 
      className="min-h-screen p-4"
      style={{ backgroundColor: sectionBackgroundColor }}
    >
      <div 
        className="max-w-md mx-auto bg-white border"
        style={{
          borderRadius: `${cardCornerRadius}px`,
          borderColor: strokeColor,
          borderWidth: `${strokeWeight}px`,
        }}
      >
        {/* Mobile Header with View Profile Button */}
        <div className="p-4 flex items-center justify-between border-b" style={{ borderColor: strokeColor }}>
          <div className="px-3 py-1 bg-black text-white text-xs rounded">
            View profile
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Maximize2 size={16} />
            </button>
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <Move size={16} />
            </button>
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <ZoomIn size={16} />
            </button>
            <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <ZoomOut size={16} />
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="bg-gray-50 p-8 flex items-center justify-center" style={{ minHeight: '300px' }}>
          <img src={FurnitureImage} alt="Cozy Longe chair" className="max-w-full max-h-64 object-contain" />
        </div>

        {/* Product Info */}
        <div style={{ padding: `${containerPadding}px` }}>
          {/* Collapsible Header */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: strokeColor }}>
            <div>
              <h1 
                className="mb-1"
                style={{
                  ...typographyStyle,
                  fontSize: `${fontSize * 1.3}px`,
                }}
              >
                Cozy Longe chair
              </h1>
              <div className="h-1.5 w-32 bg-gray-200 rounded"></div>
            </div>
            <button className="flex items-center gap-1 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8M8 12h8"/>
              </svg>
              AR
            </button>
          </div>

          {/* Customize Section */}
          <div className="flex items-center justify-between mb-4">
            <h2 
              style={{
                ...typographyStyle,
                fontSize: `${fontSize}px`,
              }}
            >
              Customize your Chair
            </h2>
            <SlidersHorizontal size={18} className="text-gray-600" />
          </div>

          {/* Customization Options - Mobile Compact */}
          <div className="space-y-2 mb-6">
            {/* Arms - Compact */}
            <div className="flex items-center justify-between text-sm py-2 border-b" style={{ borderColor: strokeColor }}>
              <span style={typographyStyle}>Arms</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Arm Finish</span>
                <span className="text-gray-400">Arm Finis</span>
              </div>
            </div>

            {/* Material Swatches - Compact Grid */}
            <div>
              <div className="text-xs text-gray-500 mb-2 uppercase" style={typographyStyle}>LEATHER</div>
              <div className="grid grid-cols-6 gap-2 mb-3">
                {materialColors.Leather.slice(0, 6).map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full transition-all ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-800' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-6 gap-2 mb-3">
                {materialColors.Leather.slice(6, 9).concat(materialColors.Silicon.slice(0, 3)).map((color, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Silicon Section */}
            <div>
              <div className="text-xs text-gray-500 mb-2 uppercase" style={typographyStyle}>SILICON</div>
              <div className="grid grid-cols-6 gap-2">
                {materialColors.Silicon.slice(0, 6).map((color, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Price & Add to Cart */}
          <div className="pt-4 border-t" style={{ borderColor: strokeColor }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-gray-500 mb-1" style={typographyStyle}>Product Price</div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold" style={typographyStyle}>$ 200</span>
                  <span className="text-sm text-gray-400 line-through" style={typographyStyle}>$ 245</span>
                </div>
              </div>
            </div>
            <div className={`flex ${buttonAlignMap[buttonAlignment]}`}>
              <button
                className={`w-full px-6 py-3 ${shadowMap[buttonShadow]} transition-all hover:scale-[1.02]`}
                style={buttonStyle}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIComponent;
