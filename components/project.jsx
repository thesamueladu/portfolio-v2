import Image from "next/image";

export default function Project(props) {
  return (
    <div className="flex flex-col">
      <div className="relative flex-1">
        <div className="relative h-72 w-full">
          <Image
            src={`/images/${props.project.img}`}
            alt="project preview"
            fill
          />
        </div>
      </div>
      {/* Responsive image */}
      {/* <div className="flex-1">
        <Image
          src={`/preview/${props.project.img}`}
          alt="project preview"
          width={475}
          height={348}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div> */}

      <div className="flex flex-1 flex-col bg-neutral-50 p-6 dark:bg-neutral-800">
        <h3 className="text-xl capitalize hover:text-primary-500">
          <a href={props.project.liveUrl} target="_blank">
            {props.project.title}
          </a>
        </h3>
        <p className="">{props.project.description}</p>

        <div className="mt-auto">
          <a
            href={props.project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 inline-block text-sm uppercase decoration-primary-500 decoration-2 underline-offset-8 hover:text-primary-500 hover:underline"
          >
            <i class="fa-solid fa-brands fa-github fa-xl"></i>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 inline-block text-sm uppercase decoration-primary-500 decoration-2 underline-offset-8 hover:text-primary-500 hover:underline"
          >
            <i class="fa-solid fa-up-right-from-square fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
