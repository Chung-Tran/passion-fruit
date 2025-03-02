# Sử dụng Node.js 18
FROM node:22-alpine 

# Đặt thư mục làm việc
WORKDIR /app

# Copy file cần thiết
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy toàn bộ code vào container
COPY . .

# Build project Next.js
RUN npm run build
RUN npm run postbuild

# Expose port 3000
EXPOSE 3000

# Chạy project
CMD ["npm", "start"]
