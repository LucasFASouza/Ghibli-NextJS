export default function Filter() {
    return (
        <div>
            <div className="dropdown relative">
                <button className="bg-gray-100 py-2 px-14 rounded inline-flex items-center">
                    <span>Directors</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                </button>
                <ul className="dropdown-menu absolute hidden pt-1">
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Studio Ghibli</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Hayao Miyazaki</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Isao Takahata</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Yoshifumi Kondo</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Goro Miyazaki</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Hiroyuki Morita</li>
                    <li className="bg-gray-100 hover:bg-gray-200 py-2 px-4 block">Hiromasa Yonebayashi</li>
                </ul>
            </div>
        </div>
    )
}