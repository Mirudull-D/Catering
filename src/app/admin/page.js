"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  getGalleryImages, 
  saveGalleryImage, 
  deleteGalleryImage, 
  isSupabaseConfigured 
} from '../../lib/supabase';
import styles from './Admin.module.css';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form State for Adding Image
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Sadhya');
  const [src, setSrc] = useState('');
  const [uploading, setUploading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  // Check existing session
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('admin_authenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadImages();
    }
  }, []);

  const loadImages = async () => {
    setLoading(true);
    const data = await getGalleryImages();
    setImages(data);
    setLoading(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

    if (passwordInput === envPassword) {
      sessionStorage.setItem('admin_authenticated', 'true');
      setIsAuthenticated(true);
      setLoginError('');
      loadImages();
    } else {
      setLoginError('Incorrect Admin Password. Please check .env.local');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  // Convert uploaded image file to Data URL
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSrc(reader.result);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    if (!title || !src) {
      setStatusMsg('Please provide a title and image!');
      return;
    }

    setUploading(true);
    const newImg = { title, category, src };
    await saveGalleryImage(newImg);

    setTitle('');
    setSrc('');
    setUploading(false);
    setStatusMsg('✅ Photo successfully added to gallery!');
    setTimeout(() => setStatusMsg(''), 3000);
    loadImages();
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to remove this photo from the gallery?')) {
      await deleteGalleryImage(id);
      loadImages();
    }
  };

  // 1. Password Login View
  if (!isAuthenticated) {
    return (
      <div className={styles.loginWrap}>
        <div className={styles.loginCard}>
          <div className={styles.lockHeader}>
            <span className={styles.lockIcon}>🔐</span>
            <h1 className={styles.loginTitle}>Admin Portal</h1>
            <p className={styles.loginSubtitle}>Sri Sankara Catering Management</p>
          </div>

          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Enter Admin Password</label>
              <input
                type="password"
                className={styles.input}
                placeholder="Password (default: admin123)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
            </div>

            {loginError && <p className={styles.errorText}>{loginError}</p>}

            <button type="submit" className={styles.loginBtn}>
              Unlock Dashboard →
            </button>
          </form>

          <div className={styles.loginFooter}>
            <Link href="/" className={styles.backHome}>← Back to Catering Website</Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. Admin Gallery Management View
  return (
    <div className={styles.adminWrap}>

      {/* Header Bar */}
      <header className={styles.adminHeader}>
        <div className={styles.brandGroup}>
          <h1 className={styles.brandTitle}>Sri Sankara Admin</h1>
          <span className={styles.badge}>
            {isSupabaseConfigured ? '🟢 Supabase Active' : '🟡 Local Storage Sync'}
          </span>
        </div>
        <div className={styles.navActions}>
          <Link href="/gallery" className={styles.previewBtn} target="_blank">
            👁️ View Live Gallery
          </Link>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            🔒 Logout
          </button>
        </div>
      </header>

      <main className={styles.mainContainer}>

        {/* Top Control Grid */}
        <div className={styles.controlGrid}>

          {/* Add Image Card */}
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>➕ Add New Photo</h2>
            <form onSubmit={handleAddImage} className={styles.addForm}>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Photo Title</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="e.g. Royal South Indian Sadhya"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Category</label>
                <select
                  className={styles.formSelect}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Sadhya">Sadhya</option>
                  <option value="Buffet">Buffet</option>
                  <option value="Live Station">Live Station</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Image Upload or URL</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className={styles.fileInput}
                />
                <span className={styles.orDivider}>or paste URL:</span>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="https://example.com/photo.jpg or /gallery/photo.png"
                  value={src}
                  onChange={(e) => setSrc(e.target.value)}
                />
              </div>

              {src && (
                <div className={styles.imagePreviewWrap}>
                  <img src={src} alt="Preview" className={styles.previewThumb} />
                </div>
              )}

              {statusMsg && <p className={styles.statusText}>{statusMsg}</p>}

              <button type="submit" className={styles.submitBtn} disabled={uploading}>
                {uploading ? 'Processing...' : 'Upload & Save Photo'}
              </button>
            </form>
          </div>

          {/* Supabase Integration Guide */}
          <div className={styles.card}>
            <h2 className={styles.cardHeading}>⚡ Supabase Status & Setup</h2>
            <div className={styles.supabaseBox}>
              <p className={styles.infoText}>
                {isSupabaseConfigured
                  ? 'Your Supabase database is connected! New gallery items will save directly to Supabase.'
                  : 'Supabase credentials in .env.local need configuration. Local Storage fallback is active so edits work immediately!'}
              </p>

              <div className={styles.sqlCodeBox}>
                <span className={styles.codeLabel}>Copy SQL Schema for Supabase:</span>
                <pre className={styles.codeSnippet}>
{`CREATE TABLE gallery_images (
  id BIGSERIAL PRIMARY KEY,
  src TEXT NOT NULL,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  created_at TIMESTAMPTZ DEFAULT NOW()
);`}
                </pre>
              </div>
            </div>
          </div>

        </div>

        {/* Gallery Items Grid */}
        <section className={styles.galleryManageSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeading}>Current Gallery Photos ({images.length})</h2>
            <p className={styles.sectionDesc}>Compact 16:9 video-style thumbnail grid. Click &quot;Delete&quot; to remove any image.</p>
          </div>

          {loading ? (
            <p className={styles.loadingText}>Loading gallery items...</p>
          ) : (
            <div className={styles.compactGrid}>
              {images.map((img) => (
                <div key={img.id} className={styles.videoCard}>
                  <div className={styles.thumbnailWrap}>
                    <img src={img.src} alt={img.title} className={styles.thumbImg} />
                    <span className={styles.playBadge}>▶ Preview</span>
                    <span className={styles.catBadge}>{img.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.thumbTitle}>{img.title}</h3>
                    <button
                      onClick={() => handleDelete(img.id)}
                      className={styles.deleteBtn}
                    >
                      🗑️ Delete Photo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>

    </div>
  );
}
