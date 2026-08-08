import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = 
  Boolean(supabaseUrl) && 
  Boolean(supabaseAnonKey) && 
  !supabaseUrl.includes('your-supabase-project');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Initial Default Gallery Dataset
export const DEFAULT_GALLERY_IMAGES = [
  { id: 1, src: '/gallery/south_indian_meals_1785684185063.png', title: 'Banana Leaf Feast', category: 'Sadhya' },
  { id: 2, src: '/gallery/buffet_setup_1785684198318.png', title: 'Grand Buffet Setup', category: 'Buffet' },
  { id: 3, src: '/gallery/dessert_platter_1785684210041.png', title: 'Royal Dessert Spread', category: 'Desserts' },
  { id: 4, src: '/gallery/live_counter_1785684260521.png', title: 'Live Dosa Counter', category: 'Live Station' },
  { id: 5, src: '/gallery/wedding_catering.png', title: 'Wedding Mandap Feast', category: 'Wedding' },
  { id: 6, src: '/gallery/corporate_catering.png', title: 'Corporate Conference', category: 'Corporate' },
  { id: 7, src: '/gallery/south_indian_meals_1785684185063.png', title: 'Traditional Sadhya', category: 'Sadhya' },
  { id: 8, src: '/gallery/buffet_setup_1785684198318.png', title: 'Luxury Banquet', category: 'Buffet' },
  { id: 9, src: '/gallery/dessert_platter_1785684210041.png', title: 'Sweet Delights Bar', category: 'Desserts' },
  { id: 10, src: '/gallery/live_counter_1785684260521.png', title: 'Chaat & Street Food', category: 'Live Station' },
  { id: 11, src: '/gallery/wedding_catering.png', title: 'Reception Banquet', category: 'Wedding' },
  { id: 12, src: '/gallery/corporate_catering.png', title: 'Executive Gala Lunch', category: 'Corporate' },
];

const LOCAL_STORAGE_KEY = 'catering_gallery_custom_items';

/**
 * Fetch all gallery images: from Supabase if configured, or from LocalStorage/Defaults.
 */
export async function getGalleryImages() {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('id', { ascending: false });

      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local dataset:', e);
    }
  }

  // LocalStorage Fallback
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing stored gallery items:', e);
      }
    }
  }

  return DEFAULT_GALLERY_IMAGES;
}

/**
 * Save / Update images list to LocalStorage & Supabase
 */
export async function saveGalleryImage(item) {
  let createdItem = { ...item, id: Date.now() };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .insert([{ src: item.src, title: item.title, category: item.category }])
        .select();

      if (!error && data && data.length > 0) {
        createdItem = data[0];
      }
    } catch (e) {
      console.error('Error inserting to Supabase:', e);
    }
  }

  // Update Local Storage
  if (typeof window !== 'undefined') {
    const current = await getGalleryImages();
    const updated = [createdItem, ...current];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  }

  return createdItem;
}

/**
 * Delete image by ID
 */
export async function deleteGalleryImage(id) {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('gallery_images').delete().eq('id', id);
    } catch (e) {
      console.error('Error deleting from Supabase:', e);
    }
  }

  if (typeof window !== 'undefined') {
    const current = await getGalleryImages();
    const updated = current.filter((img) => img.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  }
}
