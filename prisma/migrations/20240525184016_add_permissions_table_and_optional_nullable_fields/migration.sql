-- AlterTable
ALTER TABLE `Projects` MODIFY `URL_Drive` VARCHAR(191) NULL,
    MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `endDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Roles` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Task_time` MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Tasks` MODIFY `startDate` DATETIME(3) NULL,
    MODIFY `endDate` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `photo` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `Permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role_permissions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idRole` INTEGER NOT NULL,
    `idPermission` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Role_permissions` ADD CONSTRAINT `Role_permissions_idRole_fkey` FOREIGN KEY (`idRole`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role_permissions` ADD CONSTRAINT `Role_permissions_idPermission_fkey` FOREIGN KEY (`idPermission`) REFERENCES `Permissions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
