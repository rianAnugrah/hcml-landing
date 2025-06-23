import Image from "next/image";

export default function OperationPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Header Section */}
      <header className="">
        <div className="max-w-7xl mx-auto px-4 lg:px-0 pb-20 pt-20">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                OPERATION SUPPORT PROGRAM
              </h1>
              <p className="text-lg text-gray-300 mt-2">
                Community development and welfare enhancement initiatives
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto p-4 md:p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Program Overview Tile - Spans 2 columns */}
          <div className="bg-blue-600 text-white p-8 hover:bg-blue-700 transition-colors duration-200 cursor-pointer group md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Program Overview</h2>
            </div>
            <p className="text-blue-100 leading-relaxed font-light mb-4">
              HCML Operation Support Program focuses on providing felicitous assistance in the potential development of communities around the operational area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Public Relations</h3>
                <p className="text-blue-100 text-sm font-light">Building strong community connections</p>
              </div>
              <div className="bg-blue-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Community Care</h3>
                <p className="text-blue-100 text-sm font-light">Supporting local community needs</p>
              </div>
              <div className="bg-blue-700 p-4 rounded">
                <h3 className="text-white font-medium mb-2">Development</h3>
                <p className="text-blue-100 text-sm font-light">Sustainable growth initiatives</p>
              </div>
            </div>
          </div>

          {/* Focus Areas Tile */}
          <div className="bg-green-600 text-white p-8 hover:bg-green-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Focus Areas</h2>
            </div>
            <div className="space-y-4 text-green-100 font-light">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">General Infrastructures (Public Facilities)</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Public Health</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Education and Culture</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white mt-2 mr-4 flex-shrink-0"></div>
                <p className="leading-relaxed">Rural Economic Development</p>
              </div>
            </div>
          </div>

          {/* Planning & Assessment Tile */}
          <div className="bg-purple-600 text-white p-8 hover:bg-purple-700 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Planning & Assessment</h2>
            </div>
            <p className="text-purple-100 leading-relaxed font-light mb-4">
              Program planning is always based on pre-EIA (Environmental Impact Assessment) study and comprehensive stakeholder input.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-700 p-3 rounded">
                <p className="text-purple-100 text-sm font-light">Public consultation inputs</p>
              </div>
              <div className="bg-purple-700 p-3 rounded">
                <p className="text-purple-100 text-sm font-light">Local government collaboration</p>
              </div>
              <div className="bg-purple-700 p-3 rounded">
                <p className="text-purple-100 text-sm font-light">NGO partnerships</p>
              </div>
            </div>
          </div>

          {/* Collaboration Tile */}
          <div className="bg-orange-500 text-white p-8 hover:bg-orange-600 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Collaboration</h2>
            </div>
            <p className="text-orange-100 leading-relaxed font-light mb-4">
              Implementation involves collaboration with various community groups, government agencies, and non-governmental institutions.
            </p>
            <div className="text-center">
              <div className="text-3xl font-light text-orange-200 mb-2">360°</div>
              <div className="text-orange-300 font-light text-sm tracking-wide">STAKEHOLDER SUPPORT</div>
            </div>
          </div>

          {/* Training Programs Image Tile */}
          <div className="bg-slate-800 text-white p-8 hover:bg-slate-900 transition-colors duration-200 cursor-pointer group">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Training Programs</h2>
            </div>
            <div className="relative h-32 mb-4 rounded overflow-hidden">
              <Image
                src="/images/operation/Boat-maintenance-and-reparation-training.jpg"
                alt="Boat maintenance training"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-slate-300 font-light text-sm">
              Practical training sessions conducted by experts in partnership with local institutions.
            </p>
          </div>

          {/* Training History Tile - Spans full width */}
          <div className="bg-indigo-600 text-white p-8 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer group col-span-full">
            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-white mr-4"></div>
              <h2 className="text-2xl font-light tracking-wide">Training History & Achievements</h2>
            </div>
            <p className="text-indigo-100 leading-relaxed font-light mb-6">
              Started by maintenance training, fishing boats repairing, boat engines fixing, and catch-produce (seafood) processing in 2014 on the Mandangin Island, Sampang, followed by comprehensive training programs across multiple islands.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-indigo-700 p-6 rounded">
                <div className="relative h-24 mb-4 rounded overflow-hidden">
                  <Image
                    src="/images/operation/mandangin-1.jpg"
                    alt="Mandangin Island"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-medium mb-2">Mandangin Island, Sampang</h3>
                <p className="text-indigo-200 text-sm font-light">Boat maintenance, engine repair, seafood processing (2014)</p>
              </div>
              
              <div className="bg-indigo-700 p-6 rounded">
                <div className="relative h-24 mb-4 rounded overflow-hidden">
                  <Image
                    src="/images/operation/Fishermen-haul-processing-training.jpg"
                    alt="Fishermen training"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-medium mb-2">Sapudi & Raas Island</h3>
                <p className="text-indigo-200 text-sm font-light">Pickling, canning, and biogas training</p>
              </div>
              
              <div className="bg-indigo-700 p-6 rounded">
                <div className="relative h-24 mb-4 rounded overflow-hidden">
                  <Image
                    src="/images/operation/Boat-machine-engine-reparation-training.jpg"
                    alt="Engine repair training"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-medium mb-2">Kraton District, Pasuruan</h3>
                <p className="text-indigo-200 text-sm font-light">Animal feed manufacture and shell crafting</p>
              </div>
              
              <div className="bg-indigo-700 p-6 rounded flex flex-col justify-center">
                <h3 className="text-white font-medium mb-4">Academic Partnership</h3>
                <p className="text-indigo-200 text-sm font-light mb-4">
                  HCML collaborated with ITS (Institut Teknologi Sepuluh Nopember Surabaya) and local education agencies in every training activity.
                </p>
                <div className="text-center">
                  <div className="text-2xl font-light text-indigo-300 mb-1">2014</div>
                  <div className="text-indigo-400 font-light text-xs tracking-wide">STARTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 bg-slate-900 text-white p-8 text-center">
          <h3 className="text-3xl font-light tracking-wide mb-4">
            Building <span className="text-blue-400 font-normal">Sustainable Communities</span>
          </h3>
          <p className="text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
            Through comprehensive training programs and community development initiatives, HCML continues to support the welfare and economic growth of local communities across East Java.
          </p>
        </div>
      </div>
    </div>
  )
}
