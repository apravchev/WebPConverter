import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GalleryState } from '../reducers/gallery.reducer';

const gallerySelector = createFeatureSelector<GalleryState>('Gallery');
export const getGalleryFiles = createSelector(
  gallerySelector,
  (state) => state.files || []
);
export const getGalleryFirst = createSelector(
  gallerySelector,
  (state) => state.first || 0
);
export const getGalleryRows = createSelector(
  gallerySelector,
  (state) => state.rows || 0
);
export const getGalleryCount = createSelector(
  gallerySelector,
  (state) => state.count || 0
);
export const getGalleryLoading = createSelector(
  gallerySelector,
  (state) => state.loading || 0
);
export const getPaginationData = createSelector(gallerySelector, (state) => ({
  first: state.first,
  rows: state.rows,
}));
