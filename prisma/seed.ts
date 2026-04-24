import prisma from "../lib/prisma";

async function main() {
  // Clear existing products
  await prisma.product.deleteMany();

  // Create 10 products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: "T-Shirt Classic",
        slug: "t-shirt-classic",
        description: "Camiseta clássica em algodão puro",
        price: 79.99,
        stock: 50,
        active: true,
        images: ["https://via.placeholder.com/300?text=T-Shirt+Classic"],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["Preto", "Branco", "Cinza"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Hoodie Premium",
        slug: "hoodie-premium",
        description: "Moletom premium com acabamento de qualidade",
        price: 149.99,
        stock: 30,
        active: true,
        images: ["https://via.placeholder.com/300?text=Hoodie+Premium"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Preto", "Cinza", "Azul Marinho"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Calça Jeans Slim",
        slug: "calca-jeans-slim",
        description: "Calça jeans slim fit com design moderno",
        price: 119.99,
        stock: 40,
        active: true,
        images: ["https://via.placeholder.com/300?text=Calça+Jeans+Slim"],
        sizes: ["28", "30", "32", "34", "36", "38"],
        colors: ["Azul Escuro", "Azul Claro", "Preto"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Jaqueta de Couro",
        slug: "jaqueta-couro",
        description: "Jaqueta de couro genuíno com forro confortável",
        price: 299.99,
        stock: 15,
        active: true,
        images: ["https://via.placeholder.com/300?text=Jaqueta+Couro"],
        sizes: ["P", "M", "G", "GG"],
        colors: ["Preto", "Marrom"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Vestido Social",
        slug: "vestido-social",
        description: "Vestido social elegante para ocasiões especiais",
        price: 179.99,
        stock: 25,
        active: true,
        images: ["https://via.placeholder.com/300?text=Vestido+Social"],
        sizes: ["XS", "S", "M", "L"],
        colors: ["Preto", "Burgundy", "Azul Marinho"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Shorts Casual",
        slug: "shorts-casual",
        description: "Shorts casual confortável para o dia a dia",
        price: 59.99,
        stock: 60,
        active: true,
        images: ["https://via.placeholder.com/300?text=Shorts+Casual"],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Preto", "Branco", "Cáqui", "Bege"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Camisa Social Branca",
        slug: "camisa-social-branca",
        description: "Camisa social branca de algodão premium",
        price: 99.99,
        stock: 45,
        active: true,
        images: ["https://via.placeholder.com/300?text=Camisa+Social"],
        sizes: ["P", "M", "G", "GG", "XG"],
        colors: ["Branco", "Azul Claro", "Rosa"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Legging Fitness",
        slug: "legging-fitness",
        description: "Legging confortável para práticas esportivas",
        price: 89.99,
        stock: 55,
        active: true,
        images: ["https://via.placeholder.com/300?text=Legging+Fitness"],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Preto", "Cinza", "Roxo", "Rosa"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Blazer Executivo",
        slug: "blazer-executivo",
        description: "Blazer elegante para ambientes corporativos",
        price: 199.99,
        stock: 20,
        active: true,
        images: ["https://via.placeholder.com/300?text=Blazer+Executivo"],
        sizes: ["P", "M", "G", "GG"],
        colors: ["Preto", "Cinza", "Marrom"],
      },
    }),
    prisma.product.create({
      data: {
        name: "Tênis Esportivo",
        slug: "tenis-esportivo",
        description: "Tênis esportivo de alta performance com amortecimento",
        price: 139.99,
        stock: 35,
        active: true,
        images: ["https://via.placeholder.com/300?text=Tenis+Esportivo"],
        sizes: ["33", "34", "35", "36", "37", "38", "39", "40", "41", "42"],
        colors: ["Preto", "Branco", "Vermelho", "Azul"],
      },
    }),
  ]);

  console.log(`✅ Seed completed! ${products.length} products created.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
