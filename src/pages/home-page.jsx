import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authcontext';
import { Zap, Eye, Rocket, CheckCircle, FileCheck, Users, Lock } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, userRole, logout } = useAuth();

  useEffect(() => {
    console.log('🏠 HomePage auth state:', { isAuthenticated, userRole });
  }, [isAuthenticated, userRole]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
              D
            </div>
            <span className="text-xl font-bold text-blue-900">DigiBA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#tentang" className="hover:text-blue-600 transition-colors">Tentang Kami</a>
            <a href="#solusi" className="hover:text-blue-600 transition-colors">Solusi</a>
            <a href="#kontak" className="hover:text-blue-600 transition-colors">Kontak</a>
            {isAuthenticated && (
              <span className="text-blue-600">Halo, {userRole}</span>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    switch (userRole) {
                      case 'direksi':
                        navigate('/direksi/dashboard');
                        break;
                      case 'pic':
                        navigate('/pic-gudang/dashboard');
                        break;
                      case 'vendor':
                        navigate('/vendor/dashboard');
                        break;
                    }
                  }}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              <span className="text-blue-600">Digitalisasi Berita Acara</span> untuk Perusahaan Modern
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              DigiBA adalah sistem modern untuk mengelola,
              melacak, dan mengarsipkan berita acara pemerintahan dan bisnis dengan teknologi terkini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isAuthenticated ? (
                <button
                  onClick={() => navigate('/dashboard')}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
                >
                  Buka Dashboard
                </button>
              ) : (
                <Link
                  to="/register"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
                >
                  Mulai
                </Link>
              )}
            </div>
          </div>
        </section>

        <section id="tentang" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Tentang <span className="text-blue-600">DigiBA</span>
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
                  <p className="text-slate-600">
                    Menjadi partner terdepan dalam transformasi digital proses bisnis dan administrasi
                    di Indonesia dengan teknologi yang inovatif.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <FileCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Kami</h3>
                  <p className="text-slate-600">
                    Menyediakan solusi digital yang mengutamakan keamanan, kepatuhan regulasi,
                    dan kemudahan penggunaan untuk semua klien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solusi" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Mengapa Memilih DigiBA?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                DigiBA dirancang khusus untuk meningkatkan produktivitas dan akuntabilitas instansi Anda.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="text-blue-600 mb-4">
                    <Zap size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Efisiensi Tinggi</h3>
                  <p className="text-slate-600 mb-4">
                    Otomatisasi proses pembuatan dokummen menghemat waktu dibandingkan cara manual.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
                  <div className="text-blue-600 mb-4">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Transparansi Penuh</h3>
                  <p className="text-slate-600 mb-4">
                    Setiap perubahan dan persetujuan tercatat dalam sistem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="kontak" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Siap Memulai Transformasi Digital?
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                  Hubungi tim kami untuk konsultasi gratis dan demo produk.
                  Kami akan membantu menemukan solusi terbaik untuk kebutuhan Anda.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:sales@digiba.co.id"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
                  >
                    📧 Email Sales Team
                  </a>
                  <a
                    href="tel:+622112345678"
                    className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white px-8 text-base font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    📞 Hubungi Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="text-center">
          <p>© {new Date().getFullYear()} PT. Solusi Digital Indonesia. All rights reserved.</p>
          <p className="mt-2 text-slate-500">DigiBA adalah merek dagang dari PT. Solusi Digital Indonesia</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;