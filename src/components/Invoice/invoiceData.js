const invoicesData = [
    {
      invoiceNumber: 'INV-001',
      date: '2023-09-30',
      dueDate: '2023-10-15',
      client: {
        name: '1 Company',
        id:"3",
        address: '123 Main Street, Cityville',
        contactPerson: 'John Doe',
        email: 'john.doe@example.com',
        phone: '555-1234',
      },
      clientName: "Faiz",
      items: [
        {
          description: 'Product A',
          quantity: 2,
          unitPrice: 50.00,
          total: 100.00,
        },
        {
          description: 'Service B',
          quantity: 1,
          unitPrice: 75.00,
          total: 75.00,
        },
      ],
      subtotal: 175.00,
      taxRate: 0.1, // 10%
      taxAmount: 17.50,
      total: 192.50,
    },
    {
        invoiceNumber: 'INV-002',
        date: '2023-09-30',
        dueDate: '2023-10-15',
        client: {
            id:"2",
          name: '2 Company',
          address: '123 Main Street, Cityville',
          contactPerson: 'John Doe',
          email: 'john.doe@example.com',
          phone: '555-1234',
        },
        clientName: "Faiz",
        items: [
          {
            description: 'Product A',
            quantity: 2,
            unitPrice: 50.00,
            total: 100.00,
          },
          {
            description: 'Service B',
            quantity: 1,
            unitPrice: 75.00,
            total: 75.00,
          },
        ],
        subtotal: 175.00,
        taxRate: 0.1, // 10%
        taxAmount: 17.50,
        total: 192.50,
      },{
        invoiceNumber: 'INV-003',
        date: '2023-09-30',
        dueDate: '2023-10-15',
        client: {
            id:"3",
          name: '3 Company',
          address: '123 Main Street, Cityville',
          contactPerson: 'John Doe',
          email: 'john.doe@example.com',
          phone: '555-1234',
        },
       
        items: [
          {
            description: 'Product A',
            quantity: 2,
            unitPrice: 50.00,
            total: 100.00,
          },
          {
            description: 'Service B',
            quantity: 1,
            unitPrice: 75.00,
            total: 75.00,
          },
        ],
        subtotal: 175.00,
        taxRate: 0.1, // 10%
        taxAmount: 17.50,
        total: 192.50,
      }
  ];
  
  export default invoicesData;
  