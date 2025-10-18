import { Download, Settings } from 'lucide-react';
import useEditorState from '../hooks/useEditorState';
import ColorPicker from './Controls/ColorPicker';
import FontSelector from './Controls/FontSelector';
import SliderControl from './Controls/SliderControl';
import LayoutSwitch from './Controls/LayoutSwitch';

const EditorPanel = () => {
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
    galleryAlignment,
    imageSpacing,
    imageBorderRadius,
    cardCornerRadius,
    containerPadding,
    sectionBackgroundColor,
    strokeColor,
    strokeWeight,
    setActiveLayout,
    setFontFamily,
    setFontWeight,
    setFontSize,
    setButtonBorderRadius,
    setButtonShadow,
    setButtonAlignment,
    setButtonBackgroundColor,
    setButtonTextColor,
    setGalleryAlignment,
    setImageSpacing,
    setImageBorderRadius,
    setCardCornerRadius,
    setContainerPadding,
    setSectionBackgroundColor,
    setStrokeColor,
    setStrokeWeight,
    exportConfig,
  } = useEditorState();

  const handleExport = () => {
    const config = exportConfig();
    const jsonString = JSON.stringify(config, null, 2);
    
    // Copy to clipboard
    navigator.clipboard.writeText(jsonString);
    
    // Download as file
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ui-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Configuration exported! JSON copied to clipboard and downloaded.');
  };

  return (
    <div className="w-80 h-screen bg-white border-r border-gray-200 overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <div className="flex items-center gap-2 mb-4">
          <Settings className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold text-gray-800">UI Editor</h2>
        </div>
        <button
          onClick={handleExport}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={18} />
          Export Configuration
        </button>
      </div>

      <div className="p-4">
        {/* Layout Switch */}
        <LayoutSwitch value={activeLayout} onChange={setActiveLayout} />

        {/* Typography Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Typography
          </h3>
          
          <FontSelector
            label="Font Family"
            value={fontFamily}
            onChange={setFontFamily}
            options={[
              { value: 'Roboto', label: 'Roboto' },
              { value: 'Inter', label: 'Inter' },
              { value: 'Poppins', label: 'Poppins' },
            ]}
          />
          
          <FontSelector
            label="Font Weight"
            value={fontWeight}
            onChange={(val) => setFontWeight(Number(val))}
            options={[
              { value: 400, label: '400 - Regular' },
              { value: 500, label: '500 - Medium' },
              { value: 600, label: '600 - Semi Bold' },
              { value: 700, label: '700 - Bold' },
            ]}
          />
          
          <SliderControl
            label="Font Size"
            value={fontSize}
            onChange={setFontSize}
            min={10}
            max={60}
            unit="px"
          />
        </div>

        {/* Button Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Button
          </h3>
          
          <SliderControl
            label="Border Radius"
            value={buttonBorderRadius}
            onChange={setButtonBorderRadius}
            min={0}
            max={50}
            unit="px"
          />
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shadow
            </label>
            <select
              value={buttonShadow}
              onChange={(e) => setButtonShadow(e.target.value)}
              className="w-full h-10 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="none">None</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alignment
            </label>
            <div className="flex gap-2">
              {['left', 'center', 'right'].map((align) => (
                <button
                  key={align}
                  onClick={() => setButtonAlignment(align)}
                  className={`flex-1 h-10 rounded-lg border-2 transition-all capitalize ${
                    buttonAlignment === align
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {align}
                </button>
              ))}
            </div>
          </div>
          
          <ColorPicker
            label="Background Color"
            value={buttonBackgroundColor}
            onChange={setButtonBackgroundColor}
          />
          
          <ColorPicker
            label="Text Color"
            value={buttonTextColor}
            onChange={setButtonTextColor}
          />
        </div>

        {/* Gallery Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Gallery
          </h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gallery Alignment
            </label>
            <select
              value={galleryAlignment}
              onChange={(e) => setGalleryAlignment(e.target.value)}
              className="w-full h-10 px-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="grid-left">Grid Left</option>
              <option value="grid-center">Grid Center</option>
              <option value="grid-right">Grid Right</option>
            </select>
          </div>
          
          <SliderControl
            label="Image Spacing"
            value={imageSpacing}
            onChange={setImageSpacing}
            min={0}
            max={48}
            unit="px"
          />
          
          <SliderControl
            label="Image Border Radius"
            value={imageBorderRadius}
            onChange={setImageBorderRadius}
            min={0}
            max={50}
            unit="px"
          />
        </div>

        {/* General Layout Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            General Layout
          </h3>
          
          <SliderControl
            label="Card Corner Radius"
            value={cardCornerRadius}
            onChange={setCardCornerRadius}
            min={0}
            max={50}
            unit="px"
          />
          
          <SliderControl
            label="Container Padding"
            value={containerPadding}
            onChange={setContainerPadding}
            min={0}
            max={80}
            unit="px"
          />
          
          <ColorPicker
            label="Section Background"
            value={sectionBackgroundColor}
            onChange={setSectionBackgroundColor}
          />
        </div>

        {/* Stroke/Border Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
            Stroke / Border
          </h3>
          
          <ColorPicker
            label="Stroke Color"
            value={strokeColor}
            onChange={setStrokeColor}
          />
          
          <SliderControl
            label="Stroke Weight"
            value={strokeWeight}
            onChange={setStrokeWeight}
            min={0}
            max={10}
            unit="px"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
