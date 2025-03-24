-- CreateTable
CREATE TABLE "Roles" (
    "id_rol" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "grupo_id" INTEGER,
    "rol_id" INTEGER,
    "nombre" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id_grupo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id_grupo")
);

-- CreateTable
CREATE TABLE "Dispositivos" (
    "id_dispositivo" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion_ip" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dispositivos_pkey" PRIMARY KEY ("id_dispositivo")
);

-- CreateTable
CREATE TABLE "Notificaciones" (
    "id_notificacion" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "fecha_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notificaciones_pkey" PRIMARY KEY ("id_notificacion")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_correo_electronico_key" ON "Usuarios"("correo_electronico");

-- CreateIndex
CREATE UNIQUE INDEX "Dispositivos_direccion_ip_key" ON "Dispositivos"("direccion_ip");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo"("id_grupo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Roles"("id_rol") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispositivos" ADD CONSTRAINT "Dispositivos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificaciones" ADD CONSTRAINT "Notificaciones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
