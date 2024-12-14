import React from 'react';

const ProjectCard = ({ imgSrc, title, description, techStack, link }) => {
	return (
		<div className="bg-gray-900 hover:scale-[1.01] transition-all duration-200 ease-in-out min-h-[300px] rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full mx-auto flex">
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="relative transition-all duration-200 ease-in-out w-1/2">
				<img src={imgSrc} alt={title} className="w-full h-full object-cover" />
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-50"></div>
			</a>
			<div className="p-6 text-white w-1/2">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
				<div className="flex flex-wrap mb-4 gap-2">
					{techStack.map((tech, index) => (
						<span
							key={index}
							className="bg-tertiary text-xs px-3.5 py-2 rounded-full bg-black/20"
						>
							{tech}
						</span>
					))}
				</div>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-light transition-colors"
				>
					View Project
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;