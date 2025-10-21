// components/BottomNav.tsx
import Link from 'next/link';

const BottomNav = () => (
  <footer
    data-theme="light" // ensures light mode if DaisyUI is active
    className="w-full bg-white text-[#373754]"
  >
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-8">
        {/* Left: logos */}
        <div className="flex flex-row items-center gap-x-8">
          <div className="flex flex-row items-center">
            <img className="w-10 object-contain" src="/sdss-icon-bottom.png" alt="SDSS Logo" />
            <div className="heading bottom-nav-sdss-gradient pl-2 lg:pl-5">SDSS</div>
          </div>
          <img className="h-10 object-contain" src="/uoft-icon.png" alt="UofT Logo" />
        </div>

        {/* Right: links */}
        <div className="flex flex-col lg:flex-row gap-x-20 gap-y-8">
          <div className="flex flex-col gap-y-2">
            <div className="body-regular text-gray-900">CONTACT US</div>
            <Link className="body-regular text-[#6b5ca7] hover:underline" href="mailto:sdss.uoft@gmail.com">
              sdss.uoft@gmail.com
            </Link>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="body-regular text-gray-900">SOCIALS</div>
            <ul className="space-y-1">
              <li>
                <Link className="body-regular text-[#6b5ca7] hover:underline" href="https://www.instagram.com/sdssuoft" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="body-regular text-[#6b5ca7] hover:underline" href="https://www.linkedin.com/company/sdssuoft" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link className="body-regular text-[#6b5ca7] hover:underline" href="https://discord.com/invite/GWEtFzvBBe" target="_blank" rel="noopener noreferrer">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default BottomNav;
