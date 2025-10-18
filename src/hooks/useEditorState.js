import { create } from 'zustand';

const useEditorState = create((set) => ({
  // Layout
  activeLayout: 'A',
  
  // Typography
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: 16,
  
  // Button
  buttonBorderRadius: 8,
  buttonShadow: 'medium',
  buttonAlignment: 'center',
  buttonBackgroundColor: '#3B82F6',
  buttonTextColor: '#FFFFFF',
  
  // Gallery/Images
  galleryAlignment: 'grid-center',
  imageSpacing: 16,
  imageBorderRadius: 8,
  
  // General Layout
  cardCornerRadius: 16,
  containerPadding: 24,
  sectionBackgroundColor: '#F9FAFB',
  
  // Stroke/Border
  strokeColor: '#E5E7EB',
  strokeWeight: 1,
  
  // Actions
  setActiveLayout: (layout) => set({ activeLayout: layout }),
  
  setFontFamily: (family) => set({ fontFamily: family }),
  setFontWeight: (weight) => set({ fontWeight: weight }),
  setFontSize: (size) => set({ fontSize: size }),
  
  setButtonBorderRadius: (radius) => set({ buttonBorderRadius: radius }),
  setButtonShadow: (shadow) => set({ buttonShadow: shadow }),
  setButtonAlignment: (alignment) => set({ buttonAlignment: alignment }),
  setButtonBackgroundColor: (color) => set({ buttonBackgroundColor: color }),
  setButtonTextColor: (color) => set({ buttonTextColor: color }),
  
  setGalleryAlignment: (alignment) => set({ galleryAlignment: alignment }),
  setImageSpacing: (spacing) => set({ imageSpacing: spacing }),
  setImageBorderRadius: (radius) => set({ imageBorderRadius: radius }),
  
  setCardCornerRadius: (radius) => set({ cardCornerRadius: radius }),
  setContainerPadding: (padding) => set({ containerPadding: padding }),
  setSectionBackgroundColor: (color) => set({ sectionBackgroundColor: color }),
  
  setStrokeColor: (color) => set({ strokeColor: color }),
  setStrokeWeight: (weight) => set({ strokeWeight: weight }),
  
  // Export configuration
  exportConfig: () => {
    const state = useEditorState.getState();
    return {
      activeLayout: state.activeLayout,
      fontFamily: state.fontFamily,
      fontWeight: state.fontWeight,
      fontSize: state.fontSize,
      buttonBorderRadius: state.buttonBorderRadius,
      buttonShadow: state.buttonShadow,
      buttonAlignment: state.buttonAlignment,
      buttonBackgroundColor: state.buttonBackgroundColor,
      buttonTextColor: state.buttonTextColor,
      galleryAlignment: state.galleryAlignment,
      imageSpacing: state.imageSpacing,
      imageBorderRadius: state.imageBorderRadius,
      cardCornerRadius: state.cardCornerRadius,
      containerPadding: state.containerPadding,
      sectionBackgroundColor: state.sectionBackgroundColor,
      strokeColor: state.strokeColor,
      strokeWeight: state.strokeWeight,
    };
  },
}));

export default useEditorState;
