import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  services.push({
    type: "app",
    data: {
      serviceName: input.appServiceName,
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      mounts: [
        {
          type: "volume",
          name: "work",
          mountPath: "/home/jovyan/work",
        },
      ],
      domains: [
        {
          host: "$(EASYPANEL_DOMAIN)",
          port: 8888,
        },
      ],
    },
  });

  return { services };
}
