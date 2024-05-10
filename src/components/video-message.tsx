
export const VideoMessage = ({ url }: { url: string }) => {
  return (
    <video controls={true}>
       <source src={url} type="video/mp4"/>
       Your browser does not support the video tag.
    </video>
  )
}

