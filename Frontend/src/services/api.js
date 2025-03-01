// const API_URL = import.meta.env.VITE_SQ_API ;
// const storedData = JSON.parse(localStorage.getItem("token"));
// const token = storedData?.token; // Pegando o token do localStorage

// // Função genérica para fazer requisições à API
// async function fetchAPI(endpoint, options = {}) {
//   try {
//     const response = await fetch(`${API_URL}${endpoint}`, options);

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Erro na requisição");
//     }

//     return data;
//   } catch (error) {
//     console.error("Erro na API:", error.message);
//     throw error;
//   }
// }

// // Funções para a gestão de contas
// export async function criarConta(conta) {
//   return fetchAPI("/ContaPost", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(conta),
//   });
// }

// export async function fetchContas() {
//   return fetchAPI("/ContaPost", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// export async function deleteConta(id) {
//   return fetchAPI(`/ContaPost/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// // Funções para mensagens
// export async function criarMensagem(mensagem) {
//   return fetchAPI("/Mensagem", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(mensagem),
//   });
// }

// export async function fetchMensagens() {
//   return fetchAPI("/Mensagem", {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// export async function fetchMensagemById(id) {
//   return fetchAPI(`/Mensagem/${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// export async function deleteMensagem(id) {
//   return fetchAPI(`/Mensagem/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// // Funções para Posts de Mensagens
// export async function PostMensagens(postmensagens) {
//   return fetchAPI("/PostMensagens", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(postmensagens),
//   });
// }

// export async function deleteMensagens(mensagemId) {
//   return fetchAPI(`/PostMensagens/${mensagemId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

// // Função de login
// export async function loginUser(credentials) {
//   return fetchAPI("/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(credentials),
//   });
// }

// // Função para iniciar postagem no bot
// export async function iniciarPostagem(conta) {
//   const dadosPostagem = {
//     usuario: conta.usuario_nome,
//     senha: conta.senha,
//     textos: conta.posts.flatMap((post) =>
//       post.postMensagens.map((msg) => msg.mensagem.texto)
//     ),
//   };

//   await fetchAPI("/Bot", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(dadosPostagem),
//   });

//   return atualizarStatusPostagem(conta.posts[0].id, "ATIVO");
// }

// // Função para parar postagem no bot
// export async function pararPostagem(conta) {
//   await fetchAPI("/Stop", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ usuario: conta.usuario_nome }),
//   });

//   return atualizarStatusPostagem(conta.posts[0].id, "INATIVO");
// }

// // Atualizar status da postagem no backend
// export async function atualizarStatusPostagem(postId, status) {
//   return fetchAPI(`/Post/${postId}/status`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ status }),
//   });
// }
