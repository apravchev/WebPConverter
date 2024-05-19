import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GalleryState } from '../reducers/gallery.reducer';

const gallerySelector = createFeatureSelector<GalleryState>('Gallery');
export const getGalleryFiles = createSelector(
  gallerySelector,
  (state) => state.files || []
);
export const getGalleryPages = createSelector(
  gallerySelector,
  (state) => state.pages || 0
);
export const getGalleryActivePage = createSelector(
  gallerySelector,
  (state) => state.page || 0
);
export const getGalleryTotalImages = createSelector(
  gallerySelector,
  (state) => state.count || 0
);
