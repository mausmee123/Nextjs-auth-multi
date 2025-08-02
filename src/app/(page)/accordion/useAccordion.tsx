const useAccordion = () => {
  const accordionItem = [
    {
      title: "Main Contact 1",
      phone: "111-111-1111",
      children: [
        {
          title: "Sub Contact A",
          phone: "111-111-2222",
          children: [
            {
              title: "Sub Sub Contact A1",
              phone: "111-111-3333",
              children: [],
            },
            {
              title: "Sub Sub Contact A2",
              phone: "111-111-4444",
              children: [
                {
                  title: "Leaf Contact A2-1",
                  phone: "111-111-5555",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          title: "Sub Contact B",
          phone: "111-111-6666",
          children: [],
        },
      ],
    },
    {
      title: "Main Contact 2",
      phone: "222-222-1111",
      children: [
        {
          title: "Sub Contact C",
          phone: "222-222-2222",
          children: [
            {
              title: "Leaf Contact C1",
              phone: "222-222-3333",
              children: [],
            },
          ],
        },
      ],
    },
    {
      title: "Main Contact 3",
      phone: "333-333-1111",
      children: [
        {
          title: "Sub Contact D",
          phone: "333-333-2222",
          children: [
            {
              title: "Sub Sub Contact D1",
              phone: "333-333-3333",
              children: [
                {
                  title: "Leaf Contact D1-1",
                  phone: "333-333-4444",
                  children: [],
                },
                {
                  title: "Leaf Contact D1-2",
                  phone: "333-333-5555",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return { accordionItem };
};

export default useAccordion;
