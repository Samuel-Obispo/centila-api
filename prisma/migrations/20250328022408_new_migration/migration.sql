/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `Dispositivos` table. All the data in the column will be lost.
  - You are about to drop the `Grupo` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `rol_id` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Dispositivos" DROP CONSTRAINT "Dispositivos_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_grupo_id_fkey";

-- DropForeignKey
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_rol_id_fkey";

-- AlterTable
ALTER TABLE "Dispositivos" DROP COLUMN "usuario_id";

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "rol_id" SET NOT NULL;

-- DropTable
DROP TABLE "Grupo";

-- CreateTable
CREATE TABLE "Grupos" (
    "id_grupo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dispositivo_id" INTEGER NOT NULL,

    CONSTRAINT "Grupos_pkey" PRIMARY KEY ("id_grupo")
);

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "Roles"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupos"("id_grupo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grupos" ADD CONSTRAINT "Grupos_dispositivo_id_fkey" FOREIGN KEY ("dispositivo_id") REFERENCES "Dispositivos"("id_dispositivo") ON DELETE RESTRICT ON UPDATE CASCADE;
