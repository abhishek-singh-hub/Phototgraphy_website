import React from 'react';
import './aa.css';
import p1 from './photos/Portrait/p1.jpeg';
import p2 from './photos/Portrait/p2.jpeg';
import p3 from './photos/Portrait/p3.jpeg';
import p4 from './photos/Portrait/p4.jpeg';
import p5 from './photos/Portrait/p5.jpeg';
import p6 from './photos/Portrait/p6.jpeg';
import p7 from './photos/Portrait/p7.jpeg';
import a1 from './photos/Admin/A1.jpeg';
import log1 from './photos/logo1.jpg';

function portfolio(){
	return (
		<div>
			
			<link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}></link>
			
			<div>
				<div className="tab">
					<button ><strong>Contact</strong></button>
					<button ><strong>About</strong></button>
					<button ><strong>Home</strong></button>
					<button ><strong>Ordeal Click</strong></button>
					<a href=""><img id='logo' src={log1}/></a>		
				</div>
				<div id="slider">
					<figure>
						<img src={p1}/>
						<img src={p2}/>
						<img src={p3}/>
						<img src={p4}/>
						<img src={p5}/>
						<img src={p6}/>
					</figure>
				</div>
				
				<h1><strong>Ravi Shankar</strong></h1>
				<h3><strong>Photographer</strong></h3>	
				<div className="main" id='social'>
					<h2><strong>Social</strong></h2>
					<h3>Follow my work on <a href="https://www.instagram.com/ordeal_clicks/" target="_blank">Instagram</a></h3>
					 
					<div className="row">
						<div className="column">
							<div className="content">
								<a href="corparate.html"><img src={p1}/></a>
									<h3>Corparate</h3>
							</div>
						</div>
						<div className="column">
							<div className="content">
								<a href="events.html"><img src={p2}/></a>
									<h3>Events</h3>
							</div>
						</div>
						<div className="column">
							<div className="content">
								<a href="portrait.html"><img src={p3}/></a>
									<h3>Portrait</h3>
							</div>
						</div>
	
					</div>
				</div>
				
				
				
				<div>
					<h3>When words become unclear, I shall focus with photographs.
					When images become inadequate, I shall be content with silence.The people who
					hire me as a wedding photographer hire me not
					just because of my photographic style, they hire me because of the style of 
					my personality. My style and personality match, so they know they’re getting 
					a genuine style.</h3>		
				</div>
				<div id='f'>
					<footer>
						<h2 id="f">Ordeal Click</h2>
							<a href="https://www.facebook.com/profile.php?id=100040846420082" target="_blank" className="fa fa-facebook"/>
							<a href="https://www.linkedin.com/in/ravi-shankar-847a25183" target="_blank" className="fa fa-linkedin"/>
							<a href="https://www.instagram.com/ordeal_clicks/" target="_blank" className="fa fa-instagram"/>
						<br/>
						<h3>Copyright © OrdealClick.in</h3>
				   </footer>
				</div>
			</div>
		</div> 
	);
}
export default portfolio;