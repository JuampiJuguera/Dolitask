/*
  Warnings:

  - Added the required column `idTask` to the `Task_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `Task_time` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Task_time` ADD COLUMN `idTask` INTEGER NOT NULL,
    ADD COLUMN `idUser` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Task_time` ADD CONSTRAINT `Task_time_idTask_fkey` FOREIGN KEY (`idTask`) REFERENCES `Task`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task_time` ADD CONSTRAINT `Task_time_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
