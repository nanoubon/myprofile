// import logo from '../assets/logo.png'
const people = [
    {
        name: 'Pranchai Himakoon',
        role: 'Software Engineer',
        imageUrl:
            'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/296985391_5561488343901767_5053993872469654679_n.jpg?stp=cp6_dst-jpg_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFCbn_3QNWz3PlFVXOOz18zzy8NTKZHsWrPLw1MpkexaqChi6IYztJyqbIZrpq49RfdeAr1KpJXD0PTA2ohTctB&_nc_ohc=V5aoV5zUKA8AX_p3AO7&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfBS9Jug2epsN_8bppFu63WOGx51WeUoFF914Lcpq1mR3w&oe=656F1474',
    },
]

function Avatar() {
    return (
        <div>
            <ul role="list" className="p-1">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className=" items-end text-center gap-x-10">
                            <img className="h-50 w-50 rounded-full img" src={person.imageUrl} alt="" />
                            <div className="pt-5">
                                <h2 className="font-bold text-4xl leading-7 tracking-tight text-gray-900 uppercase mobile:text-2xl">{person.name}</h2>
                                <h3 className="font-semibold text-2xl pt-5 leading-6 text-indigo-600 uppercase mobile:text-xl">{person.role}</h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Avatar;