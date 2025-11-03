import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useI18n, FALLBACK_LANGUAGE } from "../context/I18nContext";
import { getPageSEO } from "../utils/seo";
import BackToTop from "../components/BackToTop";

const License = () => {
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('license', activeLanguage);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEO {...seoData} />
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[80%] 2xl:w-[55%] mx-auto px-6 py-24">
          {/* Header */}
          <div className="mb-10 mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-yellow-500 transition mb-6"
            >
              ← {t("common.actions.backToHome")}
            </Link>
            <h1 className="text-4xl font-bold text-black/90 mb-4">
              MIT License
            </h1>
            <div className="text-sm text-zinc-500 space-y-1">
              <p>Copyright (c) {currentYear} 𝕁𝕦𝕝𝕖𝕤 𝕄𝕌𝕂𝔸𝔻𝕀</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-zinc max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-yellow-900 mb-3">
                  License: MIT
                </h2>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  BuyMeACoffee-Africa is distributed under the MIT License, one of the most permissive and widely-used open source licenses. This means you are free to use, modify, and distribute this software, subject to the conditions outlined below.
                </p>
              </div>
            </section>

            {/* License Text */}
            <section className="mb-10">
              <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 font-mono text-sm leading-relaxed text-zinc-800">
                <p className="mb-4">
                  Permission is hereby granted, free of charge, to any person obtaining a copy
                  of this software and associated documentation files (the "Software"), to deal
                  in the Software without restriction, including without limitation the rights
                  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                  copies of the Software, and to permit persons to whom the Software is
                  furnished to do so, subject to the following conditions:
                </p>
                <p className="mb-4">
                  The above copyright notice and this permission notice shall be included in all
                  copies or substantial portions of the Software.
                </p>
                <p className="font-semibold">
                  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                  SOFTWARE.
                </p>
              </div>
            </section>

            {/* What This Means */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                What This Means For You
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <h3 className="font-medium text-green-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">✓</span> You Can
                  </h3>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li>• Use this software commercially</li>
                    <li>• Modify the source code</li>
                    <li>• Distribute copies</li>
                    <li>• Sublicense the software</li>
                    <li>• Use it privately</li>
                  </ul>
                </div>
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-xl">⚠</span> You Must
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• Include the original license</li>
                    <li>• Include the copyright notice</li>
                  </ul>
                </div>
              </div>

              <div className="border border-zinc-200 rounded-lg p-4">
                <h3 className="font-medium text-black/85 mb-2 flex items-center gap-2">
                  <span className="text-xl">ℹ</span> Limitations
                </h3>
                <ul className="text-sm text-zinc-700 space-y-2">
                  <li>• The software is provided "as is" without warranty</li>
                  <li>• Authors are not liable for damages</li>
                  <li>• No trademark rights are granted</li>
                </ul>
              </div>
            </section>

            {/* Contributing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                Contributing
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                By contributing to BuyMeACoffee-Africa, you agree that your contributions will be licensed under the same MIT License. We welcome contributions from the community!
              </p>
              <div className="bg-zinc-50 rounded-lg p-6">
                <p className="text-zinc-800 mb-2">
                  <strong>GitHub Repository:</strong>
                </p>
                <a 
                  href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-yellow-600 hover:underline break-all"
                >
                  github.com/2MJ-DEV/BuyMeACoffee-Africa
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mt-12 pt-8 border-t border-zinc-200">
              <h2 className="text-2xl font-semibold text-black/90 mb-4">
                Questions About The License?
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-4">
                If you have questions about how you can use this software or need clarification about the license terms, please reach out:
              </p>
              <div className="bg-zinc-50 rounded-lg p-6 space-y-2">
                <p className="text-zinc-800">
                  <strong>Email:</strong> <a href="mailto:support@buymeacoffee-africa.com" className="text-yellow-600 hover:underline">support@buymeacoffee-africa.com</a>
                </p>
                <p className="text-zinc-800">
                  <strong>GitHub:</strong> <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa/issues" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Open an issue</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <BackToTop />

      <Footer />
    </>
  );
};

export default License;
