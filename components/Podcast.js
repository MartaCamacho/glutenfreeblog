export const Podcast = ({ episode }) => {
    return (
        <iframe
        src={`https://open.spotify.com/embed/episode/${episode}`}
        width="100%"
        height="232"
        frameBorder="0"
        allowtransparecy="true"
        allow="encrypted-media"
        ></iframe>
    )
}