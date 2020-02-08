import React from 'react';
import './aa.css';
import p1 from './photos/Portrait/p1.jpeg';
import e1 from './photos/Events/e1.jpeg';
import e3 from './photos/Events/e3.jpeg';
import e4 from './photos/Events/e4.jpeg';
import c4 from './photos/Corporate/c4.jpeg';
import p4 from './photos/Portrait/p4.jpeg';
import p5 from './photos/Portrait/p5.jpeg';
import p6 from './photos/Portrait/p6.jpeg';
import c8 from './photos/Corporate/c8.jpeg';
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
						<img src={e1}/>
						<img src={c4}/>
						<img src={e4}/>
						<img src={p6}/>
					</figure>
				</div>
				<div>
					<h1 className="nameTag"><strong>Ravi Shankar</strong></h1>
					<h3 className="nameTag"id="nameTagId"><strong>Photographer</strong></h3>	
				</div>
				<div className="main" id='social'>
					<h2><strong>Social</strong></h2>
					<h3>Follow my work on <a href="https://www.instagram.com/ordeal_clicks/" target="_blank">Instagram</a></h3>
					 
					<div className="row">
						<div className="column">
							<div className="content">
								<a href=""><img src={c8} style={{width:'100%',height:'100%'}}/></a>
									<h3>Corparate</h3>
							</div>
						</div>
						<div className="column">
							<div className="content">
								<a href=""><img src={e3} style={{width:'100%',height:'100%'}}/></a>
									<h3>Events</h3>
							</div>
						</div>
						<div className="column">
							<div className="content">
								<a href=""><img src={p4} style={{width:'100%',height:'100%'}}/></a>
									<h3>Portrait</h3>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img src={a1} className="smaller-image2 image-border2" id='img1'/>		
					<h3 id='about'><strong>About Me:</strong></h3>			
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