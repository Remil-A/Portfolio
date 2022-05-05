import "./about.css"
import Award from "../../img/award.png"

function About() {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                It is a long established fact that a reader will be distracted by a readable content.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias quaerat placeat nobis. Dolorem perspiciatis sed blanditiis vel ipsam libero iure optio voluptate laborum quaerat ut hic laudantium sint, modi voluptates officia consectetur animi? Nobis placeat pariatur aspernatur facilis iusto.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                <h4 className="a-award-title">International design Award 2021</h4>
                <p className="a-award-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, assumenda!
                </p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About