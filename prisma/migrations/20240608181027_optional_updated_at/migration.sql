-- AlterTable
ALTER TABLE `Permissions` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Projects` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Role_permissions` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Roles` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task_documents` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task_priorities` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task_statuses` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task_time` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Task_types` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Tasks` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User_projects` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User_roles` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `User_tasks` MODIFY `updatedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Users` MODIFY `updatedAt` DATETIME(3) NULL;
