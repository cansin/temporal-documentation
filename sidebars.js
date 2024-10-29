module.exports = {
  documentation: [
    "index",
    {
      type: "link",
      label: "Get started",
      href: "https://learn.temporal.io/getting_started/",
    },
    {
      type: "category",
      label: "Develop",
      collapsed: false,
      link: {
        type: "doc",
        id: "develop/index",
      },
      items: [
        {
          type: "category",
          label: "TypeScript SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/typescript/index",
          },
          items: [
            "develop/typescript/core-application",
            "develop/typescript/temporal-clients",
            "develop/typescript/namespaces",
            "develop/typescript/testing-suite",
            "develop/typescript/failure-detection",
            "develop/typescript/message-passing",
            "develop/typescript/cancellation",
            "develop/typescript/asynchronous-activity-completion",
            "develop/typescript/versioning",
            "develop/typescript/observability",
            "develop/typescript/debugging",
            "develop/typescript/schedules",
            "develop/typescript/converters-and-encryption",
            "develop/typescript/timers",
            "develop/typescript/child-workflows",
            "develop/typescript/continue-as-new",
            "develop/typescript/interceptors",
          ],
        },
        "develop/activity-retry-simulator",
        "develop/worker-performance",
      ],
    },
        {
          type: "category",
          label: "Encyclopedia",
          collapsed: true,
          link: {
            type: "doc",
            id: "encyclopedia/index",
          },
          items: [
            "encyclopedia/temporal",
            "encyclopedia/workflows",
            "encyclopedia/activities",
            "encyclopedia/workers",
            "encyclopedia/workflow-message-passing",
            "encyclopedia/child-workflows",
            "encyclopedia/visibility",
            "encyclopedia/clusters",
            "encyclopedia/dataconversion",
          ],
        },
        "glossary",
        // {
        //   type: "autogenerated",
        //   dirName: "./dev-guide", // '.' means the current docs folder
        // },
      ],
    };
