import React from 'react'

export function Hero() {
    return (
        <>
            <section>

                <div className="hero bg-base-200 min-h-screen bg-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="https://a.espncdn.com/i/teamlogos/leagues/500/nfl.png"
                            className="max-w-sm rounded-lg shadow-2xl" alt='NFL logo' />
                        <div>
                            <h1 className="text-5xl font-bold text-slate-950">Atualizações da NFL!</h1>
                            <p className="py-6">
                                Informe-se sobre tudo o que está acontecendo nessa temporada!
                            </p>
                            <button className="btn btn-warning shadow-2xl">Vamos lá!</button>
                        </div>

                    </div>
                </div>
            </section>
            <section className='hero-content flex-col lg:flex-row'>
                <button className="btn text-sky-50">
                    primeiro
                    <div className="badge">+99</div>
                </button>
                <button className="btn  text-sky-500">
                    segundo
                    <div className="badge badge-secondary">+99</div>
                </button>
                <button className="btn">
                    TouchDowns
                    <div className="badge badge-accent">+1</div>
                </button>
                <button className="btn">
                    Recivers
                    <div className="badge badge-primary">+1</div>
                </button>
            </section>
        </>
    )
}

