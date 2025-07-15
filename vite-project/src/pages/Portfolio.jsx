import React from 'react'
import "../index.css"
function Portfolio() {
  return (
    <div>
        <section id="portfolio" className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white transform hover:scale-105 transition duration-300">
                        <div className="portfolio-card">
                            <img src="https://nutrition.org.pk/wp-content/uploads/2022/07/Team-project.jpg" alt="Project 1" className="w-full" />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">Project 1</h5>
                                <p>Description of Project 1.</p>
                            </div>
                            </div>
                        </div>
                        <div className="bg-white transform hover:scale-105 transition duration-300">
                        <div className="portfolio-card">
                            <img src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2022-11/data-science-projects.jpg" alt="Project 2" className="w-full" />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">Project 2</h5>
                                <p>Description of Project 2.</p>
                            </div>
                            </div>
                        </div>
                        <div className="bg-white transform hover:scale-105 transition duration-300">
                        <div className="portfolio-card">
                            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" alt="Project 3" className="w-full" />
                            <div className="p-4">
                                <h5 className="text-xl font-bold">Project 3</h5>
                                <p>Description of Project 3.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Portfolio