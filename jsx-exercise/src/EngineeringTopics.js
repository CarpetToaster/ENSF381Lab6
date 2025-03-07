
function EngineeringTopics(){
    const topics = [
        {title: "Software Engineering", description: "Building innovative software solutions\
        for the modern world."},
        {title: "Electrical Engineering", description: "Powering innovation in electronics and\
        systems."},
        {title: "Mechanical Engineering", description: "Designing machines and systems that\
        shape the future."},
        {title: "Chemical Engineering", description: "Advancing processes for a sustainable\
        future."}
    ];

    var mappedTopics = topics.map((item) =>{
        return (<div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>);
    });

    return (
        <div>
            <h2>Engineering Topic</h2>
            <div>{mappedTopics}</div>
        </div>
    );
}

export default EngineeringTopics