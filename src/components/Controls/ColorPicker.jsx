import { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = ({ label, value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="w-full h-10 rounded-lg border-2 border-gray-300 flex items-center justify-between px-3 hover:border-blue-500 transition-colors"
        >
          <div
            className="w-8 h-8 rounded border border-gray-300"
            style={{ backgroundColor: value }}
          />
          <span className="text-sm font-mono">{value}</span>
        </button>
        
        {showPicker && (
          <div className="absolute z-10 mt-2">
            <div
              className="fixed inset-0"
              onClick={() => setShowPicker(false)}
            />
            <SketchPicker
              color={value}
              onChange={(color) => onChange(color.hex)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
