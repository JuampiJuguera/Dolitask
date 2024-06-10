/*
  Warnings:

  - Made the column `updatedAt` on table `Permissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Role_permissions` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Task_documents` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Task_priorities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Task_statuses` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Task_time` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Task_types` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User_projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User_roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User_tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Permissions` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Projects` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Role_permissions` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Roles` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task_documents` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task_priorities` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task_statuses` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task_time` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Task_types` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Tasks` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User_projects` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User_roles` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User_tasks` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Users` MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
