import Breadcrumbs from '../common/Breadcrumbs';
import AsideInfo from '../common/AsideInfo'
import FileRecomendation from '../common/FileRecomendation'
import VideoRecomendation from '../common/VideoRecomendation'
import recomendation from '../../data/recomendation.json'

export default function Recomendation() {
    return (
        <main className="main">
            <div className="content">
                <div className="content_head">
                    <Breadcrumbs current={recomendation.title}/>
                    <div className="title title-page">{recomendation.title}</div>
                </div>
                <div className="content_body">
                    {recomendation.sections.map((section, sectionIndex) => (
                        <article className="article" key={sectionIndex}>
                            <div className="article_head">
                                <div className="title title-article">{section.title}</div>
                            </div>
                            <div className="article_body">
                                {section.type === 'video' && (
                                    <div className="video_items">
                                        {section.items.map((video, videoIndex) => (
                                            <VideoRecomendation
                                                key={videoIndex}
                                                title={video.title}
                                                img={video.img}
                                                url={video.url}
                                            />
                                        ))}
                                    </div>
                                )}
                                {section.type === 'file' && (
                                    <div className="text_items">
                                        {section.items.map((file, fileIndex) => (
                                            <FileRecomendation
                                                key={fileIndex}
                                                title={file.title}
                                                url={file.url}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <AsideInfo title='Информация'/>
        </main>
    )
}
