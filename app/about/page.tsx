export default function AboutPage() {
    return (
      <div className="bg-slate-900 min-h-screen">
        {/* Header Section */}
        <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                ABOUT HCML
              </h1>
              {/* <p className="text-lg text-gray-300 mt-1">
                Stay informed with the latest updates
              </p> */}
            </div>
           
          </div>
        </div>
      </header>
  
        {/* Main Content Grid */}
        <div className="max-w-7xl  mx-auto p-4 md:p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Who We Are Tile */}
            <div className="bg-blue-600 text-white p-8 hover:bg-blue-700 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-2xl font-light tracking-wide">Who We Are</h2>
              </div>
              <p className="text-blue-100 leading-relaxed font-light">
                Husky‑CNOOC Madura Limited (HCML) is a strategic upstream oil & gas joint venture under the Production
                Sharing Contract (PSC) with SKK Migas, the Indonesian government's regulator. Since its inception in 2013,
                HCML has focused on the exploration, development, and operation of natural gas assets in the Madura Strait
                and East Java region.
              </p>
            </div>
  
            {/* Mission & Operations Tile */}
            <div className="bg-purple-600 text-white p-8 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-2xl font-light tracking-wide">Mission & Operations</h2>
              </div>
              <div className="space-y-4 text-purple-100 font-light">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Becoming the leading and preferred gas producer in East Java and Central Java, with current peak gas
                    sales capacity of up to 250 MMSCFD.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                  <p className="leading-relaxed">
                    Operates multiple offshore platforms and subsea networks, including successful installation of the
                    MDA–MBH platform and pipeline system.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Our Office Tile */}
            <div className="bg-orange-500 text-white p-8 hover:bg-orange-600 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-2xl font-light tracking-wide">Our Office</h2>
              </div>
              <p className="text-orange-100 leading-relaxed font-light mb-4">
                Based in Jakarta, with our corporate office at:
              </p>
              <address className="not-italic text-orange-100 font-light leading-relaxed">
                Indonesia Stock Exchange Building Tower 1, 24th & 25th Floor,
                <br />
                Jl. Jend. Sudirman Kav. 52, South Jakarta 12190, Indonesia.
              </address>
            </div>
  
            {/* Milestones Tile - Spans 2 columns */}
            <div className="bg-green-600 text-white p-8 hover:bg-green-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-2xl font-light tracking-wide">Key Milestones</h2>
              </div>
              <p className="text-green-100 leading-relaxed font-light mb-6">
                HCML has reached several operational milestones:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-green-100 font-light leading-relaxed">
                      MAC offshore field commenced production (initially ~13.5 MMSCFD, targeting 50 MMSCFD).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-green-100 font-light leading-relaxed">
                      Increased total production from ~110 MMSCFD to 230 MMSCFD, earning appreciation from Indonesia's
                      energy minister.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-green-100 font-light leading-relaxed">
                    Internally, HCML is committed to workplace safety and community harmony— in June 2024 it hosted NEBOSH
                    HSA training, and in May 2024 organized a "Halal Bi Halal" event to strengthen employee ties.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Stats Tile */}
            <div className="bg-slate-800 text-white p-8 hover:bg-slate-900 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-white mr-4"></div>
                <h2 className="text-2xl font-light tracking-wide">By the Numbers</h2>
              </div>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-light text-blue-400 mb-2">250</div>
                  <div className="text-slate-300 font-light text-sm tracking-wide">MMSCFD CAPACITY</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-purple-400 mb-2">2013</div>
                  <div className="text-slate-300 font-light text-sm tracking-wide">ESTABLISHED</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-green-400 mb-2">230</div>
                  <div className="text-slate-300 font-light text-sm tracking-wide">CURRENT MMSCFD</div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Banner */}
          <div className="mt-8 bg-slate-900 text-white p-8 text-center">
            <h3 className="text-3xl font-light tracking-wide mb-4">
              Leading Gas Production in <span className="text-blue-400 font-normal">East Java</span>
            </h3>
            <p className="text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
              Committed to sustainable energy development and community partnership in Indonesia's growing energy sector.
            </p>
          </div>
        </div>
      </div>
    )
  }
  