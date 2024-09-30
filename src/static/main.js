const baseProductUrl = "/api/product";
const baseClientUrl = "/api/client";

function loadData(url, label, container) {
  fetch(url)
    .then((response) => response.json())
    .then((dataJson) => {
      console.log(dataJson);

      dataJson.forEach((data, index) => {
        const dataElement = buildContainer();
        if (label === "product") {
          dataElement.innerHTML = `${buildProductCard(data)}`;
        } else {
          dataElement.innerHTML = `${buildClientCard(data, index)}`;
        }
        document.getElementById(container).appendChild(dataElement);
      });
    });
}

function timeFormat(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function statusFormat(status) {
  return status ? "Active" : "Inactive";
}

function buildContainer() {
  const productElement = document.createElement("div");
  productElement.className = "w-10/12 mx-auto";
  return productElement;
}

function buildProductCard(product) {
  const { created_at, description, id, name, price, status } = product;
  return `<div class="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-blue-600 text-white px-6 py-4">
                        <h2 class="text-xl font-semibold flex items-center justify-between">
                            <div class="flex items-center justify-center">
                                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                                ${name}
                            </div>
                        </h2>
                    </div>
                    <div class="p-6 text-gray-300">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
                                        </path>
                                    </svg>
                                    id:
                                </div>
                                <span class="text-sm">${id}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                                        </path>
                                    </svg>
                                    Description:
                                </div>
                                <span class="text-sm">${description}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                    Price:
                                </div>
                                <span class="text-sm">$${price}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    created_at:
                                </div>
                                <span class="text-sm">${timeFormat(
                                  created_at
                                )}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    status:
                                </div>
                                <span class="text-sm">${statusFormat(
                                  status
                                )}</span>
                            </div>
                        </div>
                    </div>
        </div>`;
}

function buildClientCard(client, index) {
  const { address, created_at, email, id, lastname, name, phone, status } =
    client;
  let fullName = `${name} ${lastname}`;
  return `
        <div class="bg-stone-900/50 shadow-lg rounded-lg overflow-hidden">
                    <div class="bg-blue-600 text-white px-6 py-4">
                        <h2 class="text-xl font-semibold flex items-center justify-between">
                            <div>
                                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>Client ${index + 1}</div>
                        </h2>
                    </div>
                    <div class="p-6">
                        <div class="my-3 flex items-center justify-between">
                            <div class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                Name:
                            </div>
                            <h3 class="text-sm text-gray-500">${fullName}</h3>
                        </div>
                        <div class="space-y-3">

                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
                                        </path>
                                    </svg>
                                    id:
                                </div>
                                <h3 class="text-sm text-gray-500">${id}</h3>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    email:
                                </div>
                                <h3 class="text-sm text-gray-500">${email}</h3>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                        </path>
                                    </svg>
                                    phone:
                                </div>
                                <span class="text-sm text-gray-500">${phone}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">

                                    <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                    address:
                                </div>
                                <span class="text-sm text-gray-500">${address}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">

                                    <svg class="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                    created_at:
                                </div>
                                <span class="text-sm text-gray-500">${timeFormat(
                                  created_at
                                )}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-center">

                                    <svg class="w-5 h-5 mr-1 text-green-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    status:
                                </div>
                                <span class="text-sm text-gray-500">${statusFormat(
                                  status
                                )}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `;
}

function postData(data, url) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((dataJson) => {
      console.log(dataJson);
      window.location.reload();
    });
}

function onSubmitProduct(event) {
  // event.preventDefault();

  // logica para la recuparacion de datos

  postData(data, baseProductUrl);
}

function onSubmitClient(event) {
  // event.preventDefault();
  // logica para la recuparacion de datos

  postData(data, baseClientUrl);
}

loadData(baseProductUrl, "product", "app-product"); //
loadData(baseClientUrl, "client", "app-client"); //
