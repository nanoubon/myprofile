// import logo from '../assets/logo.png'
const people = [
    {
        name: 'Pranchai Himakoon',
        role: 'Software Engineer',
        imageUrl:
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg',
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
