import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GalleryState } from '../reducers/gallery.reducer';

const gallerySelector = createFeatureSelector<GalleryState>('Gallery');
export const getGalleryFiles = createSelector(
  gallerySelector,
  (state) => state.files || []
);
