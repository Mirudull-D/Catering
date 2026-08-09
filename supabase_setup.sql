-- =========================================================================
-- SRI SANKARA CATERING - COMPLETE SUPABASE SETUP (PHOTOS, VIDEOS & REVIEWS)
-- =========================================================================

-- 1. Create the `gallery_images` Database Table for Photos & Videos
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id BIGSERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'General', -- 'Sadhya', 'Buffet', 'Video', etc.
    src TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on category for fast filtering (Photos vs Videos)
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON public.gallery_images(category);

-- Enable Row Level Security (RLS) on gallery_images
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Drop policies if re-running script to avoid conflicts
DROP POLICY IF EXISTS "Allow public read access" ON public.gallery_images;
DROP POLICY IF EXISTS "Allow insert access" ON public.gallery_images;
DROP POLICY IF EXISTS "Allow delete access" ON public.gallery_images;

-- Allow public read access to gallery images & videos
CREATE POLICY "Allow public read access" ON public.gallery_images FOR SELECT USING (true);
CREATE POLICY "Allow insert access" ON public.gallery_images FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow delete access" ON public.gallery_images FOR DELETE USING (true);


-- 2. Storage Bucket Creation & Permissions (Handles Both Photos & Videos)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
VALUES (
  'gallery', 
  'gallery', 
  true, 
  104857600, -- 100MB max limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/jpg', 'video/mp4', 'video/webm', 'video/quicktime']
)
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 104857600;

DROP POLICY IF EXISTS "Public Read Media" ON storage.objects;
DROP POLICY IF EXISTS "Public Insert Media" ON storage.objects;
DROP POLICY IF EXISTS "Public Delete Media" ON storage.objects;

CREATE POLICY "Public Read Media" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');
CREATE POLICY "Public Insert Media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery');
CREATE POLICY "Public Delete Media" ON storage.objects FOR DELETE USING (bucket_id = 'gallery');


-- 3. Create the `customer_reviews` Database Table for Live Customer Reviews
CREATE TABLE IF NOT EXISTS public.customer_reviews (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    event TEXT NOT NULL DEFAULT 'Special Event',
    text TEXT NOT NULL,
    rating INTEGER NOT NULL DEFAULT 5,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on customer_reviews
ALTER TABLE public.customer_reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read reviews" ON public.customer_reviews;
DROP POLICY IF EXISTS "Allow public insert reviews" ON public.customer_reviews;
DROP POLICY IF EXISTS "Allow public delete reviews" ON public.customer_reviews;

-- Allow public read access to customer reviews
CREATE POLICY "Allow public read reviews" ON public.customer_reviews FOR SELECT USING (true);

-- Allow public submit (insert) access to customer reviews
CREATE POLICY "Allow public insert reviews" ON public.customer_reviews FOR INSERT WITH CHECK (true);

-- Allow delete access for admin moderation
CREATE POLICY "Allow public delete reviews" ON public.customer_reviews FOR DELETE USING (true);
