// import logo from '../assets/logo.png'
const people = [
    {
        name: 'Pranchai Himakoon',
        role: 'Software Engineer',
        imageUrl:
            'https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/335076361_859001218534151_3808982020612667481_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHJCBDiJnecRRIcUxZv4AzJqzwhRQs8pQerPCFFCzylB6mfMAsa3aeY2Ysk9vTQW_1GbAKWlH_7_0belP6Xm8EA&_nc_ohc=rRf3hyzTNKUAX-jix_Y&_nc_oc=AQmc5STV5xUgsPDjwEYbsKoletbpcAOyY2__qygIFCOvFijAIJS9xW5IB9oPhBIa5Mw&_nc_ht=scontent.fbkk21-1.fna&oh=00_AfArFq817hEZ35bBsqbdaUFvLhOI8fUk4swSL3cGtXxVDw&oe=65727C9B',
    },
]

function Avatar() {
    return (
        <div>
            <ul role="list" className="p-1">
                {people.map((person) => (
                    <li key={person.name}>
                        <div className=" items-end text-center gap-x-10">
                            <img className=" h-48 w-auto rounded-full img" src={person.imageUrl} alt="" />
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