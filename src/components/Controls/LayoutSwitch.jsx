import { LayoutGrid, LayoutList } from 'lucide-react';

const LayoutSwitch = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Layout Style
      </label>
      <div className="flex gap-2">
        <button
          onClick={() => onChange('A')}
          className={`flex-1 h-20 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
            value === 'A'
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 hover:border-gray-400 text-gray-600'
          }`}
        >
          <LayoutGrid size={24} />
          <span className="text-xs font-medium">Layout A</span>
        </button>
        <button
          onClick={() => onChange('B')}
          className={`flex-1 h-20 rounded-lg border-2 transition-all flex flex-col items-center justify-center gap-2 ${
            value === 'B'
              ? 'border-blue-500 bg-blue-50 text-blue-600'
              : 'border-gray-300 hover:border-gray-400 text-gray-600'
          }`}
        >
          <LayoutList size={24} />
          <span className="text-xs font-medium">Layout B</span>
        </button>
      </div>
    </div>
  );
};

export default LayoutSwitch;
