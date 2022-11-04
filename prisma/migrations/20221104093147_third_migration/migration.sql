/*
  Warnings:

  - You are about to drop the column `path` on the `socials` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[path]` on the table `routes` will be added. If there are existing duplicate values, this will fail.
  - Made the column `deploy` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `link` to the `socials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "deploy" SET NOT NULL;

-- AlterTable
ALTER TABLE "socials" DROP COLUMN "path",
ADD COLUMN     "link" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "routes_path_key" ON "routes"("path");
